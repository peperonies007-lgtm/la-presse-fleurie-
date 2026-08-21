# Journal de test — process de chaînage ancré (sur personnage jetable "Boule")

Test isolé pour évaluer le "chaînage ancré" (chaque frame générée à partir de la précédente, consigne de changement minimal et quantifié, recalage périodique sur la référence) décrit dans `/01-scripts/technique-de-prompt.md`. Mouvement choisi : **regarder autour de soi**, degré de liberté simple (rotation de tête) — mais comme "Boule" n'a pas de tête distincte du corps (c'est une sphère), le test porte plutôt sur une **rotation d'un simple repère visuel** (les yeux/la bouche qui se déplacent sur la sphère comme si elle tournait sur elle-même). Ça isole encore plus la variable testée que sur un personnage complexe.

Personnage utilisé : `Boule`, voir `/99-tests-process/personnage-test/fiche-personnage-test.md` — volontairement jetable et simple, pour que toute dérive observée soit attribuable au process, pas à la complexité du design.

## Méthode testée

1. Frame 1 = image de référence de Boule générée depuis son prompt de base (face)
2. Chaque frame suivante générée en joignant la frame précédente (pas la référence de base), avec une seule consigne quantifiée (angle de rotation apparente du visage sur la sphère)
3. Recalage prévu après la frame 5 : comparer à la référence de base pour détecter une dérive cumulée

## Suivi des itérations

| Frame | Angle visé | Ancrée sur | Résultat | Dérive observée | Tentatives nécessaires |
|---|---|---|---|---|---|
| 1 | 0° (face) | prompt de base | Réussi du 1er coup — style croquis N&B bien respecté (traits esquissés, hachurage, imperfections) | Aucune | 1 |
| 2 | ~15° | frame 1 | Échec x2 — image quasi identique à la frame 1, aucune rotation visible appliquée malgré la consigne | Sur-ancrage total sur la référence : le modèle ignore un changement jugé "trop subtil" (15°) plutôt que de dériver visuellement | 2 (en cours, consigne à renforcer) |
| 3 | ~30° | frame 2 | En attente | | |
| 4 | ~45° | frame 3 | En attente | | |
| 5 | ~60° | frame 4 | En attente | | |

### Enseignement en cours

Contrairement à la marche (où le risque était la dérive incontrôlée), ici le risque inverse apparaît : le modèle reproduit l'image de référence presque à l'identique et n'applique pas un changement jugé trop faible. Piste de correction : formuler le changement de façon plus insistante et avec un repère visuel plus net (ex. comparer explicitement à un cadran horaire ou une fraction du cercle) plutôt qu'un simple angle en degrés.

## Conclusion du test

[À compléter une fois les 5 frames testées — taux de réussite du 1er coup, décision : adopter le chaînage pour les prochains mouvements denses ou rester sur la bibliothèque 4-frames standard.]
