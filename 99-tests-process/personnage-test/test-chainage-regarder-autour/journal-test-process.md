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
| 1 | 0° (face) | prompt de base | À générer | | |
| 2 | ~15° | frame 1 | À tester | | |
| 3 | ~30° | frame 2 | À tester | | |
| 4 | ~45° | frame 3 | À tester | | |
| 5 | ~60° | frame 4 | À tester | | |

## Conclusion du test

[À compléter une fois les 5 frames testées — taux de réussite du 1er coup, décision : adopter le chaînage pour les prochains mouvements denses ou rester sur la bibliothèque 4-frames standard.]
