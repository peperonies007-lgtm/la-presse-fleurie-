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
| 2 | ~15° puis reformulé "position 9h" | frame 1 | Échec x2 avec angle en degrés, réussi à la 3e tentative avec repère d'horloge ("9 heures") — décalage net et clairement visible | Aucune une fois la bonne formulation trouvée | 3 |
| 3 | "position 8h" | frame 2 | Réussi du 1er coup — progression cohérente et clairement visible par rapport à la frame 2 | Aucune | 1 |
| 4 | "position 7h, quasi-profil" | frame 3 | Réussi du 1er coup — progression cohérente, quasi-profil net | Badge scintillant Gemini visible (même artefact que sur Racine, confirme que ce n'est pas lié au style) | 1 |
| 5 | "position 6h, profil complet" | frame 4 | En attente | | |

### Enseignement en cours

Contrairement à la marche (où le risque était la dérive incontrôlée), ici le risque inverse apparaît : le modèle reproduit l'image de référence presque à l'identique et n'applique pas un changement jugé trop faible. Piste de correction : formuler le changement de façon plus insistante et avec un repère visuel plus net (ex. comparer explicitement à un cadran horaire ou une fraction du cercle) plutôt qu'un simple angle en degrés.

## Conclusion du test

[À compléter une fois les 5 frames testées — taux de réussite du 1er coup, décision : adopter le chaînage pour les prochains mouvements denses ou rester sur la bibliothèque 4-frames standard.]
