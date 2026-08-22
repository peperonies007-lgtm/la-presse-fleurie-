# Workflow de production — série animée 2D IA

Résumé du workflow complet de production, en 8 phases. Méthode : génération d'images fixes cohérentes via IA (Nano Banana / Gemini), assemblées en animation 2D "sur les deux" (12 dessins uniques par seconde, chaque image tenue 2 images à l'écran, pas d'interpolation IA par défaut).

## Structure du projet

```
/00-bible            Bible artistique globale + fiches de chaque personnage
/01-scripts          Scripts et découpages plan par plan de chaque épisode
/02-references        Planches de référence de l'équipe et de chaque personnage individuel
/03-decors            Décors réutilisables
/04-mouvements        Bibliothèque de cycles de mouvement réutilisables par personnage
/05-generations        Images générées, classées par épisode/plan/frame
/06-assemblages        Séquences animées montées, par plan
/07-son               Musique, voix, bruitages
/08-episodes-finaux    Montages finaux exportés
```

## Les 8 phases

### Phase 0 — Bible artistique + design de l'équipe
Planche commune de l'équipe, puis fiches individuelles de chaque personnage.
- **Outils recommandés** : Gemini / Nano Banana (génération), éditeur de texte pour les fiches
- **Temps estimé** : 1 à 2 jours (dépend du nombre de personnages et des allers-retours de cohérence)
- **Fichier de sortie attendu** : `/00-bible/bible-artistique.md`, une `/00-bible/fiche-personnage-[nom].md` par personnage, planche commune dans `/02-references/equipe/`

### Phase 1 — Écriture du script
Rédaction du script et découpage plan par plan de l'épisode.
- **Outils recommandés** : éditeur de texte / traitement de texte
- **Temps estimé** : quelques heures par épisode
- **Fichier de sortie attendu** : `/01-scripts/episode-XX.md` rempli à partir du template

### Phase 2 — Construction de la bibliothèque de mouvements par personnage
Génération une fois pour toutes des cycles de mouvement standards (marcher, courir, sauter, s'asseoir, saluer, regarder autour de soi...) pour chaque personnage.
- **Outils recommandés** : Gemini / Nano Banana
- **Temps estimé** : 2 à 4 heures par personnage pour la première bibliothèque complète
- **Fichier de sortie attendu** : frames rangées dans `/04-mouvements/[personnage]/[mouvement]/`

### Phase 3 — Génération des décors
Création des décors réutilisables de la série.
- **Outils recommandés** : Gemini / Nano Banana
- **Temps estimé** : 1 à 3 heures par décor
- **Fichier de sortie attendu** : images dans `/03-decors/[nom-decor]/`

### Phase 4 — Génération des frames spécifiques à l'épisode
Génération des poses/expressions non couvertes par la bibliothèque de mouvements, spécifiques aux besoins de l'épisode.
- **Outils recommandés** : Gemini / Nano Banana
- **Temps estimé** : variable selon le nombre de plans "NOUVEAU" identifiés dans le découpage
- **Fichier de sortie attendu** : images dans `/05-generations/episode-XX/plan-XX/`

### Phase 5 — Assemblage 2D plan par plan
Montage de chaque plan en animation 2D : 12 images par seconde ("sur les deux"), pas d'interpolation IA par défaut.
- **Outils recommandés** : CapCut (gratuit)
- **Temps estimé** : 20 à 40 minutes par plan
- **Fichier de sortie attendu** : séquences vidéo dans `/06-assemblages/episode-XX/plan-XX.mp4`

### Phase 6 — Son
Ajout de la musique, des voix et des bruitages.
- **Outils recommandés** : CapCut (gratuit) pour le montage son basique ; enregistrement direct pour les voix ; bibliothèques de musiques/bruitages libres de droits
- **Temps estimé** : 2 à 4 heures par épisode
- **Fichier de sortie attendu** : fichiers audio dans `/07-son/musique/`, `/07-son/voix/`, `/07-son/bruitages/`

### Phase 7 — Montage final de l'épisode
Assemblage de tous les plans montés avec le son, export final.
- **Outils recommandés** : CapCut (gratuit)
- **Temps estimé** : 1 à 2 heures par épisode
- **Fichier de sortie attendu** : vidéo finale dans `/08-episodes-finaux/episode-XX.mp4`

## Pour commencer

1. Remplir `/00-bible/bible-artistique.md` (concept, palette, matière, éclairage, fond neutre, règles de cohérence).
2. Dupliquer `/00-bible/fiche-personnage-template.md` pour chaque personnage de l'équipe.
3. Passer en Phase 1 avec `/01-scripts/template-episode.md` pour écrire le premier épisode (`/01-scripts/episode-01.md`).
