# Journal de test — process de chaînage ancré

Test isolé pour évaluer le "chaînage ancré" (chaque frame générée à partir de la précédente, consigne de changement minimal et quantifié, recalage périodique sur la référence) décrit dans `/01-scripts/technique-de-prompt.md`. Mouvement choisi : **regarder autour de soi**, non encore fait pour Racine, degré de liberté simple (rotation de tête uniquement) pour isoler l'évaluation du process sans la complexité de l'alternance gauche/droite déjà résolue sur la marche.

Objectif : évaluer si on peut produire une séquence plus dense (8+ frames) avec un taux de réussite correct, en gardant les mêmes exigences de cohérence que la bibliothèque de mouvements officielle. Résultat non destiné à remplacer la version 4-frames standard sauf si le test est concluant.

## Méthode testée

1. Frame 1 = image de référence validée de Racine (0°, face) — zéro risque, pas de nouvelle génération
2. Chaque frame suivante générée en joignant la frame précédente (pas la référence de base), avec une seule consigne quantifiée (angle de rotation de tête)
3. Recalage prévu après la frame 5 : comparer à la référence de base pour détecter une dérive cumulée

## Suivi des itérations

| Frame | Angle visé | Ancrée sur | Résultat | Dérive observée | Tentatives nécessaires |
|---|---|---|---|---|---|
| 1 | 0° (face) | référence de base | Réutilisée telle quelle | — | 0 |
| 2 | ~15° gauche | frame 1 | À tester | | |
| 3 | ~30° gauche | frame 2 | À tester | | |
| 4 | ~45° gauche | frame 3 | À tester | | |
| 5 | ~60° gauche (quasi-profil) | frame 4 | À tester | | |

## Conclusion du test

[À compléter une fois les 4 frames testées — taux de réussite du 1er coup, comparaison avec la difficulté rencontrée sur la marche, décision : adopter le chaînage pour les prochains mouvements denses ou rester sur la bibliothèque 4-frames standard.]
