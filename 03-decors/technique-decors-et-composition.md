# Technique de décors et composition personnage + décor

Ce document décrit comment combiner un personnage de la bibliothèque (`/04-mouvements`, `/05-generations`) avec un décor (`/03-decors`) pour produire une image de plan qualitative.

## Deux approches

### A. Génération IA tout-en-un (personnage + décor dans un seul prompt)

À réserver aux plans larges/simples où la précision du personnage compte moins qu'une cohérence globale de scène (ex : plan d'ambiance sans action précise). Risque : plus le prompt est complexe (personnage + décor + pose + lumière), plus le personnage risque de dériver visuellement (déjà constaté à plusieurs reprises sur Racine). À éviter pour les plans d'action où le personnage doit rester identique à sa fiche.

### B. Composition en couches (méthode recommandée par défaut)

1. **Détourer le personnage** : comme chaque personnage est généré sur un fond neutre uni (règle de la bible artistique), le détourage se fait par simple sélection de couleur (pas besoin d'outil de détourage IA, souvent imprécis sur les détails fins comme une barbe).
2. **Générer le décor séparément**, une fois, réutilisable pour tous les plans qui s'y déroulent (voir règle de matière décor/personnage dans `/00-bible/bible-artistique.md` : le décor est en pâte à modeler texture brute, le personnage en pâte à modeler lissée — ce contraste aide à la lisibilité même après composition).
3. **Superposer** le personnage détouré sur le décor à la bonne échelle et position.

## Ce qui rend une composition qualitative

- **Ombre de contact** : ombre floue, ovale, semi-transparente sous les pieds du personnage, orientée selon la lumière du décor (matin / jour / soir / nuit — voir bible artistique). Sans cette ombre, le personnage semble flotter.
- **Correction de lumière** : ajuster la balance des couleurs du calque personnage pour qu'elle corresponde à l'ambiance lumineuse du décor (ex : virage chaud pour une scène "soir").
- **Échelle absolue** : au-delà de l'échelle relative entre personnages (ex : Racine = 100 %, définie dans sa fiche), fixer une fois pour toutes sa taille par rapport aux éléments du décor (une feuille, une fissure d'écorce...). Composer une première image de référence "personnage debout dans le décor" comme repère d'échelle pour toutes les compositions suivantes dans ce décor.
- **Léger flou de bord** (1-2px) sur le contour du personnage détouré, pour éviter un contour trop net/plat qui trahit le montage.

## Outils recommandés (gratuits en priorité)

- **Photopea** (photopea.com) — équivalent Photoshop gratuit dans le navigateur, aucune installation. Calques, sélection par couleur, masques, réglages de couleur (balance des couleurs, courbes). Outil recommandé par défaut pour composer sur PC.
- **GIMP** — alternative gratuite installée, mêmes fonctionnalités, utile pour du travail par lot (batch) si beaucoup de frames à composer.
- Pas besoin d'outil de détourage IA (remove.bg, etc.) grâce au fond neutre standard des personnages.

## Workflow recommandé par plan

1. Récupérer la ou les frames de personnage nécessaires (bibliothèque de mouvements ou génération dédiée).
2. Récupérer le décor du lieu concerné (`/03-decors/[lieu]/`).
3. Détourer chaque frame de personnage (sélection par couleur du fond neutre → suppression).
4. Composer dans Photopea/GIMP : décor en fond, personnage(s) au-dessus, ombre de contact, correction de lumière.
5. Exporter l'image composée vers `/05-generations/episode-XX/plan-XX/` (ou `/04-mouvements/[personnage]/[mouvement]/` si c'est une frame de bibliothèque réutilisable composée une fois pour toutes en décor neutre... — en pratique, la bibliothèque de mouvements reste sur fond neutre, la composition avec décor se fait au niveau de chaque plan d'épisode, pas au niveau de la bibliothèque).
