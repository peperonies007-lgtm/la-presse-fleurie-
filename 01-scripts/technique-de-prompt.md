# Technique de prompt — méthode validée

Ce document décrit la méthode de prompt à utiliser pour toute génération d'image via IA (Nano Banana / Gemini) dans ce projet. Elle s'applique à la génération de personnages, de mouvements et de décors.

## Structure en 4 blocs obligatoires

Chaque prompt de génération de personnage doit être construit dans cet ordre, avec ces 4 blocs distincts et explicites :

1. **PERSONNAGE** — le bloc figé copié tel quel depuis la fiche du personnage (`/00-bible/fiche-personnage-[nom].md`). Ne décrit jamais l'action, seulement l'identité visuelle fixe.
2. **POSE** — une seule consigne de mouvement/position à la fois (voir règle ci-dessous).
3. **EXPRESSION** — l'émotion faciale/corporelle voulue pour cette image précise.
4. **CADRAGE** — plan (plan large, plan moyen, gros plan...), angle de vue, position dans l'image.
5. **À ÉVITER** — liste explicite de ce qui ne doit pas apparaître dans l'image.

> Remarque : le bloc "À ÉVITER" est listé séparément ci-dessus mais fait partie intégrante des 4 blocs obligatoires aux côtés de PERSONNAGE / POSE / EXPRESSION / CADRAGE — aucun prompt ne doit en omettre un.

## Règles obligatoires

### Une seule consigne de mouvement à la fois

Ne jamais combiner deux poses dans un même prompt (ex : ne pas demander "il court puis il saute"). Chaque image fixe correspond à une seule pose, une seule action, un seul instant. Si une action nécessite plusieurs étapes, générer une image par étape.

### Toujours répéter le bloc PERSONNAGE identique mot pour mot

Le bloc PERSONNAGE ne doit jamais être reformulé, résumé ou paraphrasé d'une génération à l'autre. Copier-coller exactement le texte du bloc de base défini dans la fiche personnage. Toute reformulation, même légère, augmente le risque de dérive visuelle (couleur, proportions, détails qui changent).

### Toujours nommer explicitement ce qu'on ne veut pas voir apparaître

Le bloc À ÉVITER doit lister les biais connus du modèle à corriger pour ce personnage ou cette scène (ex : éléments parasites récurrents, déformations typiques, couleurs qui dérivent, doublons de membres, texte parasite, arrière-plan non neutre, changement de matière...). Mettre à jour cette liste au fur et à mesure des erreurs constatées avec le modèle.

### Rester dans la même conversation IA pour un même personnage

Ne jamais changer de session/conversation en cours de route pour un même personnage. Le modèle garde en mémoire le contexte visuel au sein d'une même conversation, ce qui améliore la cohérence entre générations successives. Une nouvelle conversation = risque de dérive visuelle plus élevé, donc à réserver au démarrage d'un nouveau personnage ou en cas de dérive déjà installée nécessitant un redémarrage propre.

## Variante : génération groupée d'un cycle de mouvement

Pour un cycle de mouvement de la bibliothèque (`/04-mouvements`), il est possible de demander à Gemini de générer en une seule requête toutes les frames clés d'un même mouvement (ex : les 4 frames d'un cycle de marche), plutôt que d'envoyer un prompt par frame. Ça reste conforme à la règle "une seule pose par image" tant que le prompt :

- répète le bloc PERSONNAGE une seule fois en tête de prompt (toujours mot pour mot, jamais reformulé)
- décrit ensuite chaque frame séparément, numérotée (Image 1, Image 2...), avec sa propre consigne de pose
- précise explicitement en consigne qu'il ne doit jamais y avoir deux poses mélangées dans une même image
- garde le même bloc EXPRESSION, CADRAGE et À ÉVITER pour toutes les frames (sauf si l'émotion doit varier au fil du mouvement)

Cette variante accélère la production mais reste plus fragile que la génération frame par frame : vérifier après coup que chaque image respecte bien sa pose individuelle et que le personnage n'a pas dérivé d'une frame à l'autre. En cas de dérive, repasser en génération séparée frame par frame.

## Limite connue : badge/icône scintillante Gemini

Les générations via Gemini/Nano Banana laissent parfois un petit badge scintillant dans un coin de l'image (constaté systématiquement en bas à droite lors des tests sur Racine). Ce n'est pas un artefact du modèle mais probablement un élément d'app — inutile de l'ajouter au bloc À ÉVITER, il ne disparaît pas par prompt. À rogner systématiquement au montage (Phase 5).

## Exemple de structure de prompt

```
PERSONNAGE :
[bloc figé copié depuis la fiche personnage, mot pour mot]

POSE :
[une seule consigne de mouvement/position]

EXPRESSION :
[émotion faciale/corporelle voulue]

CADRAGE :
[plan, angle, cadrage]

À ÉVITER :
[liste explicite des éléments/biais à ne pas voir apparaître]
```
