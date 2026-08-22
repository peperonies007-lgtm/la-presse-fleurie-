# Fiche personnage — Racine

## Identité

- **Nom** : Racine
- **Rôle dans le groupe** : le leader terre-à-terre — celui qui organise, protège et veille sur le village de la Fourche. Premier personnage créé de l'équipe ; les autres membres viendront se greffer autour de lui.

## Description physique complète et figée

> Cette description ne doit JAMAIS changer d'une génération à l'autre.

- **Silhouette / gabarit** : petit gnome des bois trapu et robuste, corps rond, jambes courtes et courtaudes, posture stable et bien ancrée au sol (jamais penché, toujours bien planté sur ses deux pieds — cohérent avec son caractère terre-à-terre)
- **Couleurs exactes** :
  - Peau du visage et des mains : brun clair chaud, ton écorce claire (#C08552)
  - Barbe : brun foncé grisé (#6B5744), tressée en mèches qui évoquent des racines entrelacées
  - Bonnet : conique, en écorce, brun-rouge (#8B4A3B), avec une petite feuille d'érable séchée plantée au sommet
  - Tunique : vert mousse (#6E7F52), ceinturée d'une fine liane brun foncé
  - Yeux : petits, noirs, ronds
- **Détails distinctifs qui ne doivent jamais changer** :
  - Barbe tressée en forme de racines entrelacées (unique à Racine, jamais une barbe lisse)
  - Bonnet conique en écorce avec sa feuille d'érable séchée plantée au sommet
  - Tient toujours à la main un petit bâton noueux (bâton de marche et symbole d'autorité douce)
- **Matière** : pâte à modeler lissée, finition douce et nette (voir règle décor/personnage dans `/00-bible/bible-artistique.md`)
- **Échelle relative** : 100 % — Racine est le personnage de référence pour l'échelle de toute l'équipe

## Prompt de base PERSONNAGE

> Bloc réutilisable **tel quel** dans chaque génération impliquant Racine. Ne jamais reformuler, ne jamais paraphraser — copier-coller à l'identique à chaque fois (voir `/01-scripts/technique-de-prompt.md`).

```
PERSONNAGE : Racine, un petit gnome des bois en pâte à modeler (claymation), style animation pour enfants. Corps TRÈS trapu et compact, proportions chibi (tête large, torse court et rond, jambes courtes et épaisses), PAS de silhouette élancée ni de proportions d'adulte. Posture stable et bien ancrée au sol. Peau du visage et des mains brun clair chaud (ton écorce claire). Barbe brun foncé grisé, épaisse et noueuse, texturée comme un enchevêtrement de racines noueuses avec des nœuds et renflements irréguliers — PAS une barbe à spirales décoratives lisses et régulières, PAS de bouclettes ornementales symétriques. Bonnet conique en écorce brun-rouge, avec une petite feuille d'érable séchée plantée bien droite tout en haut de la pointe du bonnet (pas sur le côté). Tunique vert mousse ceinturée d'une fine liane brun foncé enroulée deux fois. Petits yeux noirs et ronds. Tient toujours à la main un petit bâton noueux. Texture pâte à modeler lissée, finition douce et nette, traces d'outils minimales, se détachant clairement du fond. Fond neutre brun terre uni, texture pâte à modeler légère, uniforme, sans dégradé ni vignettage, sans détail, sans ombre portée.
```

### Biais connus à éviter (bloc À ÉVITER pour Racine)

> À reprendre tel quel dans le bloc "À ÉVITER" de chaque prompt de génération impliquant Racine (voir `/01-scripts/technique-de-prompt.md`). Liste mise à jour au fil des essais.

```
À ÉVITER : aucun watermark, logo ou icône scintillante/étincelle dans l'image. Aucun dégradé ni vignettage sur le fond (fond uni et plat uniquement). Pas de silhouette élancée ou de proportions d'adulte — corps compact et chibi uniquement. Pas de barbe à spirales décoratives lisses et symétriques — barbe noueuse façon racines uniquement. Pas de texte ni de signature dans l'image. Pas de deuxième personnage dans le cadre.
```

## Statut

**Référence validée** (2e génération, après correction de la silhouette, de la texture de barbe et de la position de la feuille — voir bloc À ÉVITER ci-dessus). Cette image sert désormais de base pour toutes les générations futures de Racine (poses, mouvements, plans d'épisode) : la décrire dans les prompts suivants comme une image de référence existante plutôt que de repartir du texte seul, pour maximiser la cohérence.

> Note technique : un badge/icône scintillante apparaît systématiquement en bas à droite des générations Gemini/Nano Banana. Ce n'est pas corrigeable par prompt (probablement un élément d'app, pas un artefact du modèle) — à rogner systématiquement au montage (Phase 5, CapCut) plutôt que de chercher à l'éliminer en amont.

## Bibliothèque de mouvements

### Marcher (4 frames) — validé

| Frame | Contenu | Origine |
|---|---|---|
| frame-01 | Contact A — jambe droite nettement en avant, jambe gauche en arrière, foulée engagée | Génération dédiée, à partir de l'image de référence |
| frame-02 | Jambe droite levée, genou plié à 90°, pied décollé du sol | Génération dédiée, à partir de l'image de référence |
| frame-03 | Pose neutre (transition) | Réutilisation de l'image de référence validée (voir astuce de repli dans `/04-mouvements/liste-mouvements-standards.md`) |
| frame-04 | Jambe gauche levée, genou plié à 90°, pied décollé du sol | Miroir horizontal exact de frame-02 |

À ranger dans `/04-mouvements/racine/marcher/frame-01.png` à `frame-04.png` (rogner le badge scintillant Gemini avant export).

### Saluer (4 frames) — validé, réussi du premier coup

| Frame | Contenu | Origine |
|---|---|---|
| frame-01 | Bras libre baissé, position de repos | Génération dédiée (batch 3 images), à partir de l'image de référence |
| frame-02 | Bras libre à mi-hauteur, plié au coude, paume vers l'avant | Génération dédiée (batch 3 images) |
| frame-03 | Bras libre levé au maximum au-dessus de la tête | Génération dédiée (batch 3 images) |
| frame-04 | Bras libre à mi-hauteur (retour) | Réutilisation de frame-02 (même pose, cycle aller-retour) |

Mouvement simple à réussir en un seul lot car aucune alternance gauche/droite requise (une seule main bouge, le bâton reste dans l'autre main sur les 3 images). À privilégier comme modèle pour les prochains mouvements simples.

À ranger dans `/04-mouvements/racine/saluer/frame-01.png` à `frame-04.png`.

## Personnalité / émotion dominante

- **Traits de personnalité** : protecteur, organisé, sérieux, loyal, a du mal à lâcher le contrôle
- **Émotion dominante** : vigilance bienveillante — sourcils légèrement froncés par sérieux, mais regard toujours doux ; posture stable même dans l'inquiétude
- **Tics de mouvement ou d'expression** : serre son bâton noueux à deux mains quand il est stressé ; tapote le sol du pied quand il réfléchit
- **Vocalisations non-verbales** : grognement grave et bref pour marquer son désaccord ; soupir sonore quand il cède ; petit raclement de gorge pour rappeler le groupe à l'ordre
