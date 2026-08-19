# Bible artistique

## Concept de la série (en une phrase)

Un petit village vit caché dans les branches d'un vieil érable du Japon en bonsaï, posé sur un rebord de fenêtre, et chaque épisode raconte une mini-aventure du quotidien de ses habitants.

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
