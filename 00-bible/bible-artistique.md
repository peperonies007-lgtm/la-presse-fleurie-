# Bible artistique

## Concept de la série (en une phrase)

Un petit village vit caché dans les branches d'un vieil érable du Japon en bonsaï, posé sur un rebord de fenêtre, et chaque épisode raconte, sans un mot de dialogue, une mini-aventure du quotidien de ses habitants.

## Règle fondamentale : zéro dialogue parlé

La série se raconte entièrement sans dialogue parlé — uniquement par le langage corporel, les expressions, les onomatopées et les bruitages. C'est un choix stratégique autant qu'artistique (validé par des références comme *Larva*, diffusée dans plus de 180 pays sans une seule ligne de dialogue) :
- **Portée internationale** : une série sans dialogue n'a besoin d'aucun doublage/sous-titrage pour être comprise partout — le geste et l'expression sont un langage universel.
- **Économie de production** : pas de synchronisation labiale à animer frame par frame, ce qui est particulièrement coûteux en génération IA + stop-motion.
- **Conséquences pour l'écriture et le design** :
  - Chaque épisode doit se comprendre uniquement par l'image et le son (voir `/07-son/technique-son-et-rythme.md`) — jamais par une réplique.
  - Les personnages communiquent par gestes, regards, expressions exagérées et sons non-verbaux (grognements, exclamations, onomatopées).
  - Les fiches personnages doivent définir des tics d'expression/gestes bien identifiables (voir `/00-bible/fiche-personnage-template.md`), qui remplacent une "voix" au sens propre.
  - Le découpage plan par plan (`/01-scripts/template-episode.md`) doit décrire des actions et réactions physiques claires, jamais des lignes de dialogue.

## Univers commun

### L'arbre : un érable du Japon (momiji)

L'espèce du bonsaï n'est pas un détail décoratif, elle structure tout l'univers visuel :
- **Feuilles palmées**, très reconnaissables même en silhouette
- **Écorce fine et lisse**, gris-brun, avec de petites fissures — texture agréable à sculpter en pâte à modeler
- **Arbre caduc**, avec un changement de couleur spectaculaire à l'automne (vert → rouge-orangé flamboyant), qui sert de moteur saisonnier gratuit : un seul arbre, quatre looks très différents, sans redessiner ni les personnages ni l'architecture du village
- **Branches fines et sinueuses**, qui permettent une architecture de village suspendu

### Logique d'échelle du monde

Tout ce que les habitants utilisent ou construisent vient littéralement de l'arbre. Cette règle doit être répétée dans chaque prompt de décor pour rester cohérente :
- Une feuille = un toit de cabane
- Une fissure d'écorce = une rue ou un chemin
- Une touffe de mousse = une forêt miniature
- Une goutte de rosée = un point d'eau, une mare
- Un fil de toile d'araignée = un pont suspendu ou une corde
- Une coquille d'escargot vide = un abri, un entrepôt
- La sève = une matière collante, utilisée comme colle ou comme ambre

### Architecture du village

Le village ne se pose pas sur l'arbre, il pousse dedans : toits en écailles de feuilles séchées superposées façon bardeaux, murs tissés de brindilles fines jointées à la sève, escaliers taillés à même les plis de l'écorce en spirale autour du tronc, ponts en fil de toile d'araignée tendus entre deux branches.

### Carte du village — 5 lieux réutilisables (`/03-decors`)

1. **La Fourche** — place centrale, là où le tronc se divise en deux grosses branches
2. **Le Creux** — cavité naturelle du tronc, refuge commun
3. **La Vigie** — la branche la plus haute, vue dégagée sur "le Grand Dehors" (le reste de la pièce, jamais montré en entier, juste évoqué)
4. **La Cave-Racines** — sous la ligne de terre du pot, accès par une fente dans le rebord en céramique, ambiance plus mystérieuse
5. **Le Nid** — un amas de feuilles douillet, coin cachette

Le bonsaï est posé sur un rebord de fenêtre : le pot (céramique grise ou terre cuite émaillée) peut abriter la Cave-Racines, et la fenêtre motive naturellement toutes les lumières de la série.

### Palette de couleurs (par saison)

| Saison | Feuillage | Ambiance |
|---|---|---|
| Printemps | Vert tendre, bourgeons rose pâle | Lumière claire, plein d'espoir |
| Été | Vert profond | Ombres fraîches, dense |
| Automne | Rouge-orangé flamboyant | Doré, chaleureux, un peu mélancolique |
| Hiver | Branches nues brun-gris, touches de givre blanc | Lumière froide, cocon |

Palette des personnages : tons terreux et naturels (brun écorce, vert mousse, crème, gris-bleu pâle), avec pour chaque personnage une touche de couleur signature qui le distingue nettement des autres et du décor.

### Texture / matière

Pâte à modeler (claymation) pour l'ensemble de l'univers, avec une règle de finition à deux niveaux constante dans tous les prompts :
- **Décors** (écorce, mousse, feuilles) : texture brute et organique, finition mate, traces d'outils/de doigts visibles
- **Personnages** : pâte à modeler lissée, finition plus douce et nette, pour toujours se détacher clairement du fond

### Éclairage type

Toujours motivé par la fenêtre voisine du bonsaï, ce qui permet de réutiliser 4 ambiances lumineuses cohérentes dans n'importe quel épisode :
- **Matin** : lumière claire et fraîche, venant de la droite
- **Jour** : lumière diffuse neutre
- **Soir** : lumière chaude dorée (lampe de la pièce)
- **Nuit** : lumière bleu froid (lune à travers la vitre), silhouettes plus sombres

### Fond neutre standard

Pour les générations de personnages isolés (fiches, planches de référence) : fond brun terre uni, texture pâte à modeler légère, sans détail, sans ombre portée — permet un détourage facile pour l'assemblage.

### Le visage de l'Arbre

Un nœud dans l'écorce à la base de la Fourche porte un visage à peine esquissé — présence silencieuse et gratuite en production (aucun cycle de mouvement à créer, seulement 3 expressions fixes) :
- Yeux fermés, léger sourire — état par défaut, calme
- Un pli d'écorce légèrement relevé — curieux
- Un pli plus creusé — inquiet

## Règles de cohérence transversales à toute l'équipe

- **Échelle relative entre personnages** : chaque personnage a une échelle définie dans sa fiche individuelle, exprimée en pourcentage d'un personnage de référence (Racine = 100 %). Cette échelle doit être respectée dans chaque génération où plusieurs personnages apparaissent ensemble.
- **Style de rendu identique** : tous les personnages utilisent la pâte à modeler lissée décrite ci-dessus, tous les décors la pâte à modeler brute — jamais l'inverse, jamais de mélange de matière.
- **Cohérence des couleurs** : chaque personnage a sa palette propre (définie dans sa fiche individuelle) mais reste dans la gamme de couleurs naturelles/terreuses de la série.
- **Angle de référence** : sauf indication contraire dans un prompt, les personnages sont générés de face ou 3/4, jamais de profil strict, pour rester reconnaissables des enfants.
- **Logique de matériaux** : tout élément visible dans un décor ou porté par un personnage doit pouvoir se justifier comme venant de l'arbre (feuille, écorce, sève, mousse, rosée, toile d'araignée) — jamais d'objet moderne ou incohérent avec le microcosme.

## Identité graphique et viralité

Trois principes observés sur les personnages/marques qui percent sur les réseaux (Labubu, Chiikawa) et sur les formats courts en général, à appliquer systématiquement à la conception de la série.

### Le test de la silhouette

Un personnage doit rester identifiable même réduit à la taille d'une vignette, flou, ou en noir et blanc — c'est ce qui permet à un personnage d'être reconnaissable dans n'importe quel contexte (habillé différemment, sous une autre lumière, en objet dérivé). Concrètement : réduire l'image de référence de chaque personnage validé à la taille d'une vignette (quelques centimètres) et vérifier qu'il reste identifiable instantanément. Si non, renforcer le contraste de sa silhouette ou de sa couleur signature avant de valider la fiche définitivement.

### Le hook des 3 premières secondes + la boucle

Sur les formats courts (TikTok, YouTube Shorts, Reels), le premier plan doit être un hook visuel ou une situation curieuse, jamais une mise en place lente — c'est ce qui détermine si le spectateur reste au-delà des premières secondes. Quand c'est possible, penser le dernier plan d'un épisode pour qu'il puisse boucler naturellement vers le premier (ou vers le générique) : les contenus qui bouclent bien génèrent plus de re-visionnages, ce que les algorithmes favorisent.

### L'univers derrière le personnage

Un design mignon ne suffit pas à créer de l'attachement durable — c'est la présence d'un univers/histoire cohérent (déjà développé ci-dessus : l'érable, la logique d'échelle, la carte du village, les saisons) qui transforme un personnage en objet auquel le public s'attache. À exploiter activement dans toute communication autour de la série : ne jamais présenter un personnage seul sans rappeler le monde auquel il appartient.

### Palette signature par personnage

Au-delà de la palette générale terreuse de la série, chaque personnage doit porter au moins une touche de couleur vive et unique qui le rend repérable en un coup d'œil dans un flux (ex : la feuille orange de Racine) — cette couleur signature doit être définie dans la fiche de chaque personnage et ne jamais être réutilisée pour un autre membre de l'équipe.
