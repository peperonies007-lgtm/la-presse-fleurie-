#!/usr/bin/env python3
"""
Recadre et recentre automatiquement une séquence de frames de personnage,
pour éliminer le flottement de position/échelle d'une frame à l'autre
(constaté sur le premier test de mouvement de Zoum).

Usage :
    python3 auto-crop-normalize.py frame-01.png frame-02.png ... -o dossier_sortie/

Principe :
    1. Détecte le personnage sur chaque image (tout ce qui n'est pas fond blanc/quasi-blanc)
    2. Calcule sa boîte englobante (bounding box)
    3. Recadre avec une marge identique autour du personnage sur toutes les frames
    4. Redimensionne à une hauteur commune, centre horizontalement sur une toile commune
"""
import sys
import argparse
from pathlib import Path
from PIL import Image
import numpy as np


def find_character_bbox(im_arr, white_threshold=245, margin_px=20):
    """Trouve la boîte englobante du personnage (tout pixel non blanc)."""
    gray = im_arr.mean(axis=2)
    mask = gray < white_threshold
    ys, xs = np.where(mask)
    if len(xs) == 0:
        h, w = im_arr.shape[:2]
        return (0, 0, w, h)
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    h, w = im_arr.shape[:2]
    x0 = max(0, x0 - margin_px)
    y0 = max(0, y0 - margin_px)
    x1 = min(w, x1 + margin_px)
    y1 = min(h, y1 + margin_px)
    return (x0, y0, x1, y1)


def process(paths, out_dir, target_height=700, margin_px=20):
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    cropped = []
    for p in paths:
        im = Image.open(p).convert("RGB")
        arr = np.array(im)
        bbox = find_character_bbox(arr, margin_px=margin_px)
        crop = im.crop(bbox)
        w, h = crop.size
        new_w = int(w * target_height / h)
        crop = crop.resize((new_w, target_height), Image.LANCZOS)
        cropped.append((Path(p).stem, crop))

    max_w = max(c.size[0] for _, c in cropped)

    for name, im in cropped:
        w, h = im.size
        bg = im.getpixel((2, 2))
        canvas = Image.new("RGB", (max_w, target_height), bg)
        offset = (max_w - w) // 2
        canvas.paste(im, (offset, 0))
        out_path = out_dir / f"{name}.png"
        canvas.save(out_path)
        print(f"{name} -> {out_path} ({canvas.size})")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("frames", nargs="+", help="Chemins des images à normaliser, dans l'ordre")
    parser.add_argument("-o", "--out", default="normalized", help="Dossier de sortie")
    parser.add_argument("--height", type=int, default=700, help="Hauteur cible en pixels")
    parser.add_argument("--margin", type=int, default=20, help="Marge autour du personnage en pixels")
    args = parser.parse_args()
    process(args.frames, args.out, target_height=args.height, margin_px=args.margin)
