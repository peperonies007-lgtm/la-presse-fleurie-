# Scripts de production

## `gemini_chain.py` — chaînage ancré automatisé

Automatise l'aller-retour manuel qu'on faisait dans le chat (envoyer un prompt,
récupérer l'image, la rattacher pour la frame suivante), en gardant la pause
de validation humaine entre chaque frame — c'est cette pause qui a permis de
corriger les 3 problèmes du test Radar (amplitude trop grande, recul non
visible, retour à une pose neutre non désiré). Voir la section "Critère de
choix : planche complète vs chaînage frame par frame" dans
`/01-scripts/technique-de-prompt.md` pour la raison de ce choix.

**Non testé en conditions réelles dans cette session** (pas de clé API ni
d'accès réseau Gemini disponibles ici) — à valider une première fois sur PC
avant de s'en servir en production.

### Installation

```bash
pip install -r requirements.txt
export GEMINI_API_KEY="ta-clé-api"
```

La clé API se génère sur [Google AI Studio](https://aistudio.google.com/apikey).

Le nom du modèle par défaut (`gemini-2.5-flash-image-preview`) peut avoir
changé depuis — vérifier le nom exact du modèle "Nano Banana" courant dans la
documentation Gemini si le script renvoie une erreur de modèle inconnu, et le
passer avec `--model`.

### Usage

```bash
python3 gemini_chain.py sequences/radar-reaction-alerte-12f.yaml \
    --base-image /chemin/vers/radar-reference-validee.png \
    --out ../../10-zoum-et-radar/04-mouvements \
    --normalize
```

À chaque frame générée, le script affiche le chemin du fichier et attend :
- `o` → valider, passer à la frame suivante (elle devient la référence pour
  la suivante si `reference: previous`)
- `r` → régénérer cette frame ; une note de correction optionnelle est ajoutée
  au prompt (ex : "le recul doit être plus visible")
- `q` → s'arrêter ; les frames déjà validées restent sur disque

Avec `--normalize`, une fois toutes les frames validées, le script appelle
automatiquement `auto-crop-normalize.py` dessus.

### Créer une nouvelle séquence

Copier `sequences/radar-reaction-alerte-12f.yaml` comme point de départ — il
illustre les 3 types de repère qui fonctionnent (référence identique, repère
de recul concret mesurable, hold quasi identique). Une frame avec
`reference: base` réutilise l'image passée en `--base-image` (typiquement la
frame 1) ; `reference: previous` chaîne sur la dernière frame validée.

### Renommage final

Le script écrit dans `[out]/en-cours/[mouvement_id]/frame-NN.png` pendant la
production, puis (avec `--normalize`) dans `[out]/[mouvement_id]/`. Une fois
la séquence approuvée, renommer chaque fichier au format du projet
(`[personnage]-[mouvement]-f[numéro].png`, voir
`/01-scripts/technique-de-prompt.md`) avant de committer.

## `auto-crop-normalize.py`

Recadre et recentre une séquence de frames pour éliminer le flottement de
position/échelle d'une frame à l'autre. Voir le docstring du script pour
l'usage détaillé.
