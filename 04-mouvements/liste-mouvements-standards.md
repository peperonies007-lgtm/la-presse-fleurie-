# Liste des mouvements standards

Cycles de mouvement à construire **une fois pour toutes** par personnage, puis à réutiliser dans tous les épisodes sans avoir à les régénérer (voir `/05-generations` pour les frames spécifiques hors bibliothèque).

Chaque cycle est stocké dans `/04-mouvements/[nom-personnage]/[nom-mouvement]/` sous forme de frames numérotées (frame-01, frame-02, ...).

## Mouvements simples — 4 frames clés recommandées

| Mouvement | Frames clés | Description |
|---|---|---|
| Marcher | 4 | Pose neutre → jambe avant levée → pose neutre (croisement) → jambe arrière levée (cycle en boucle) |
| Courir | 4 | Position d'appui → poussée/extension → suspension (les deux pieds décollés) → réception |
| Regarder autour de soi | 4 | Face → tête tournée à gauche → face → tête tournée à droite |
| Saluer | 4 | Bras baissé → bras à mi-hauteur → bras levé au maximum → retour à mi-hauteur |

## Mouvements complexes — 6 à 8 frames clés recommandées

| Mouvement | Frames clés | Description |
|---|---|---|
| Sauter | 6-8 | Position accroupie (préparation) → extension des jambes → décollage → apex (point le plus haut) → descente → réception accroupie |
| S'asseoir | 6 | Debout → flexion des genoux → mi-descente → contact avec l'assise → ajustement → position assise stable |
| Se lever | 6 | Position assise → avancée du buste → appui sur les jambes → mi-extension → redressement → position debout stable |
| Rire | 6-8 | Neutre → sourire → ouverture de bouche → tête légèrement renversée → pic d'expression → retour progressif au neutre |

## Notes de production

- Chaque cycle doit être généré dans la **même conversation IA** que la fiche personnage de base, pour garantir la cohérence visuelle (voir `/01-scripts/technique-de-prompt.md`).
- Un mouvement simple en boucle (marcher, courir) doit pouvoir se répéter frame 4 → frame 1 sans à-coup visuel.
- Un mouvement complexe non bouclable (sauter, s'asseoir, rire) doit avoir une frame de départ et une frame d'arrivée cohérentes avec la pose neutre du personnage, pour permettre l'enchaînement avec d'autres mouvements.
- Si un épisode nécessite un mouvement non listé ici, l'ajouter à cette liste une fois créé, pour qu'il devienne réutilisable dans les épisodes suivants.
