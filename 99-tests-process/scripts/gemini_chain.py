#!/usr/bin/env python3
"""
Automatise le chaînage ancré décrit dans /01-scripts/technique-de-prompt.md :
pour chaque frame d'une séquence définie dans un fichier YAML, construit le
prompt en 4 blocs (PERSONNAGE / POSE / EXPRESSION / CADRAGE / À ÉVITER),
appelle l'API Gemini avec la frame précédente (ou l'image de base) en
référence, puis marque une pause pour validation humaine avant de continuer
la chaîne — cette pause reste volontaire : c'est elle qui a permis de
rattraper les erreurs du test Radar (amplitude trop grande, recul non
visible, retour à une pose neutre non désiré), une planche générée d'un
coup ne le permettrait pas (voir la section "Critère de choix" du même
document).

Usage :
    export GEMINI_API_KEY=...
    python3 gemini_chain.py sequences/exemple.yaml --base-image ref-radar.png --normalize

À chaque frame, le script affiche le chemin de l'image générée et attend
une réponse au clavier :
    [o] valider et continuer à la frame suivante
    [r] régénérer cette frame (avec une note de correction optionnelle)
    [q] arrêter ici (les frames déjà validées restent sur disque)

Format du fichier de séquence (YAML) :

    personnage_id: radar
    mouvement_id: reaction-alerte-12f
    out_dir: 10-zoum-et-radar/04-mouvements/radar/reaction-alerte-12f
    personnage: |
      PERSONNAGE : ... (bloc figé copié depuis la fiche personnage)
    a_eviter_base: |
      liste des éléments à éviter, commune à toutes les frames
    frames:
      - reference: base       # "base" (image de -\-base-image) ou "previous"
        pose: "..."
        expression: "..."
        cadrage: "..."
        a_eviter_extra: ""    # optionnel, ajouté après a_eviter_base
      - reference: previous
        pose: "..."
        ...
"""
import argparse
import os
import subprocess
import sys
from pathlib import Path

import yaml
from PIL import Image

try:
    from google import genai
    from google.genai import types
except ImportError:
    genai = None
    types = None

DEFAULT_MODEL = "gemini-2.5-flash-image"


def build_prompt(personnage, pose, expression, cadrage, a_eviter_base, a_eviter_extra):
    a_eviter = a_eviter_base.strip()
    if a_eviter_extra:
        a_eviter = a_eviter + " " + a_eviter_extra.strip()
    return f"""PERSONNAGE :
{personnage.strip()}

POSE :
{pose.strip()}

EXPRESSION :
{expression.strip()}

CADRAGE :
{cadrage.strip()}

À ÉVITER :
{a_eviter}
"""


def call_gemini(client, model, prompt_text, reference_paths):
    if genai is None:
        raise RuntimeError(
            "Le package 'google-genai' n'est pas installé. "
            "Installe les dépendances avec : pip install -r requirements.txt"
        )
    contents = []
    for ref_path in reference_paths:
        data = Path(ref_path).read_bytes()
        contents.append(types.Part.from_bytes(data=data, mime_type="image/png"))
    contents.append(prompt_text)

    response = client.models.generate_content(model=model, contents=contents)

    for part in response.candidates[0].content.parts:
        if getattr(part, "inline_data", None) is not None:
            from io import BytesIO
            return Image.open(BytesIO(part.inline_data.data)).convert("RGB")

    raise RuntimeError(
        "Aucune image dans la réponse Gemini — vérifie le prompt ou le nom du "
        "modèle (--model), et regarde response.text pour un éventuel refus."
    )


def run_sequence(seq_path, base_image, out_root, model, normalize):
    seq = yaml.safe_load(Path(seq_path).read_text())

    personnage = seq["personnage"]
    a_eviter_base = seq["a_eviter_base"]
    personnage_id = seq["personnage_id"]
    mouvement_id = seq["mouvement_id"]
    frames = seq["frames"]

    work_dir = Path(out_root) / "en-cours" / mouvement_id
    work_dir.mkdir(parents=True, exist_ok=True)

    if genai is None:
        print("ERREUR : google-genai n'est pas installé. pip install google-genai", file=sys.stderr)
        sys.exit(1)
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERREUR : variable d'environnement GEMINI_API_KEY manquante.", file=sys.stderr)
        sys.exit(1)
    client = genai.Client(api_key=api_key)

    validated = []
    last_valid_path = None
    if base_image:
        # Frame 1 = la référence de base elle-même (pas générée) — copiée ici
        # pour que la numérotation frame-NN corresponde à la convention du
        # projet (Frame 1 = référence de base, voir technique-de-prompt.md).
        frame1_path = work_dir / "frame-01.png"
        Image.open(base_image).convert("RGB").save(frame1_path)
        validated.append(frame1_path)
        last_valid_path = frame1_path
        print(f"Frame 1 (référence de base) copiée : {frame1_path}")

    i = 0
    while i < len(frames):
        frame_def = frames[i]
        frame_num = i + 2 if base_image else i + 1
        ref = frame_def.get("reference", "previous")
        if ref == "base":
            if not base_image:
                print(f"Frame {frame_num} demande l'image de base mais --base-image n'a pas été fourni.", file=sys.stderr)
                sys.exit(1)
            reference_paths = [base_image]
        else:
            if last_valid_path is None:
                print(f"Frame {frame_num} demande la frame précédente mais aucune n'est encore validée.", file=sys.stderr)
                sys.exit(1)
            reference_paths = [str(last_valid_path)]

        note = ""
        while True:
            prompt_text = build_prompt(
                personnage,
                frame_def["pose"],
                frame_def["expression"],
                frame_def["cadrage"],
                a_eviter_base,
                frame_def.get("a_eviter_extra", "") + (" " + note if note else ""),
            )

            print(f"\n--- Génération Frame {frame_num}/{len(frames)} ---")
            img = call_gemini(client, model, prompt_text, reference_paths)

            out_path = work_dir / f"frame-{frame_num:02d}.png"
            img.save(out_path)
            print(f"Frame {frame_num} générée : {out_path}")

            choice = input("[o] valider  [r] régénérer avec une note  [q] arrêter ici : ").strip().lower()
            if choice == "o":
                validated.append(out_path)
                last_valid_path = out_path
                break
            elif choice == "r":
                note = input("Note de correction à ajouter au prompt : ").strip()
                continue
            elif choice == "q":
                print(f"Arrêt à la frame {frame_num}. Frames validées : {len(validated)}.")
                return validated
            else:
                print("Choix non reconnu, réessaie.")
        i += 1

    print(f"\nSéquence complète : {len(validated)} frames validées dans {work_dir}")

    if normalize:
        final_dir = Path(out_root) / mouvement_id
        script_path = Path(__file__).parent / "auto-crop-normalize.py"
        cmd = [sys.executable, str(script_path), *[str(p) for p in validated], "-o", str(final_dir)]
        print(f"\nNormalisation : {' '.join(cmd)}")
        subprocess.run(cmd, check=True)
        print(f"Frames normalisées dans {final_dir} — prêtes à être renommées "
              f"'{personnage_id}-{mouvement_id}-f[numéro].png' puis committées.")

    return validated


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("sequence", help="Fichier YAML décrivant la séquence de frames")
    parser.add_argument("--base-image", help="Image de référence de base (frame 1 / reference: base)")
    parser.add_argument("--out", default=".", help="Dossier racine où écrire les frames (défaut : dossier courant)")
    parser.add_argument("--model", default=DEFAULT_MODEL, help=f"Nom du modèle Gemini (défaut : {DEFAULT_MODEL})")
    parser.add_argument("--normalize", action="store_true", help="Lance auto-crop-normalize.py sur les frames validées à la fin")
    args = parser.parse_args()

    run_sequence(args.sequence, args.base_image, args.out, args.model, args.normalize)
