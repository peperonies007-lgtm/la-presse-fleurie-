# Liste des mouvements standards

Cycles de mouvement à construire **une fois pour toutes** par personnage, puis à réutiliser dans tous les épisodes sans avoir à les régénérer (voir `/05-generations` pour les frames spécifiques hors bibliothèque).

Chaque cycle est stocké dans `/04-mouvements/[nom-personnage]/[nom-mouvement]/` sous forme de frames numérotées (frame-01, frame-02, ...).

> **Cadence du projet : animation 2D "sur les deux"** — 12 dessins uniques par seconde de mouvement (chaque image tenue 2 images à l'écran). Standard économique de l'industrie TV, deux fois moins d'images à générer qu'en "sur les uns" (24/s) pour un résultat toujours fluide et professionnel. Les nombres de frames ci-dessous sont calibrés pour cette cadence.

## Mouvements simples — 8 frames clés recommandées

| Mouvement | Frames clés | Description |
|---|---|---|
| Marcher | 8 | Contact A → passage → contact B (jambe opposée) → passage → répété sur un cycle complet, chaque étape légèrement plus détaillée qu'un simple 4-temps pour rester fluide en boucle |
| Courir | 8 | Position d'appui → poussée → extension → suspension (les deux pieds décollés) → réception → amorti → repositionnement → nouvel appui |
| Regarder autour de soi | 8 | Face → quart vers la gauche → profil gauche → retour quart → face → quart vers la droite → profil droit → retour face |
| Saluer | 8 | Bras baissé → amorce → mi-hauteur → presque levé → levé au maximum → redescente amorcée → mi-hauteur → retour bras baissé |

## Mouvements complexes — 12 à 16 frames clés recommandées

| Mouvement | Frames clés | Description |
|---|---|---|
| Sauter | 12-16 | Position accroupie (préparation) → accroupissement max → extension → décollage → montée → apex (point le plus haut) → début de descente → approche du sol → réception accroupie → amorti → redressement partiel → position stable |
| S'asseoir | 12 | Debout → flexion initiale → flexion prononcée → mi-descente → approche de l'assise → contact → ajustement → stabilisation → position assise stable (poser en fin de cycle sur 2-3 frames tenues) |
| Se lever | 12 | Position assise → avancée du buste → appui initial sur les jambes → poussée → mi-extension → redressement → quasi debout → ajustement final → position debout stable |
| Rire | 12-16 | Neutre → amorce de sourire → sourire → ouverture de bouche → rire installé → tête légèrement renversée → pic d'expression → maintien du pic → retour progressif → apaisement → quasi neutre → neutre |

## Notes de production

- Chaque cycle doit être généré dans la **même conversation IA** que la fiche personnage de base, pour garantir la cohérence visuelle (voir `/01-scripts/technique-de-prompt.md`).
- Un mouvement simple en boucle (marcher, courir) doit pouvoir se répéter dernière frame → première frame sans à-coup visuel.
- Un mouvement complexe non bouclable (sauter, s'asseoir, rire) doit avoir une frame de départ et une frame d'arrivée cohérentes avec la pose neutre du personnage, pour permettre l'enchaînement avec d'autres mouvements.
- Si un épisode nécessite un mouvement non listé ici, l'ajouter à cette liste une fois créé, pour qu'il devienne réutilisable dans les épisodes suivants.
- **Astuce de repli — pose neutre récalcitrante** : si une pose "neutre/croisement" échoue de façon répétée en miroir ou en génération directe (incohérences, accessoire qui disparaît, jambe qui ne s'inverse pas), la remplacer par **l'image de référence déjà validée du personnage** (posture debout par défaut). C'est une pose neutre par nature, zéro risque de nouvelle génération ratée, et elle fonctionne très bien comme frame de transition/repos dans un cycle.
- **Méthode recommandée pour générer les frames intermédiaires** : chaînage ancré + repère visuel concret (voir `/01-scripts/technique-de-prompt.md`) — chaque frame générée à partir de la précédente, avec un repère net (ex. position d'horloge) plutôt qu'un angle abstrait. Validé à 100 % de réussite sur le test `/99-tests-process/`.
- **Mouvements existants à mettre à jour** : les cycles "marcher" et "saluer" de Racine ont été construits à l'ancienne cadence stop-motion (4 frames) — à reprendre et étoffer à 8 frames pour correspondre au nouveau standard 2D avant réutilisation en épisode.
