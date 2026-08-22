# Fiche personnage — Radar

## Identité

- **Nom** : Radar
- **Rôle dans le duo** : l'observatrice stratège — étudie chaque situation avant d'agir, souvent doublée par l'impulsivité de Zoum au dernier moment

## Description physique complète et figée

- **Silhouette / gabarit** : corps fin et élancé, nettement plus petite et plus mince que Zoum (silhouette opposée en duo)
- **Détails distinctifs qui ne doivent jamais changer** :
  - Un œil légèrement plus plissé que l'autre en permanence (regard analytique)
  - Antennes longues, fines, parfaitement droites et rigides, bien plus longues que la tête
  - Petite marque triangulaire nette sur le dessus de la tête, toujours au même endroit
  - Ailes fines, nettes, symétriques, repliées avec précision contre le corps
- **Matière** : croquis crayonné noir et blanc (voir `/10-zoum-et-radar/00-bible/bible-artistique.md`)
- **Échelle relative** : sensiblement plus petite que Zoum (référence 100 %)

## Prompt de base PERSONNAGE

```
PERSONNAGE : Radar, une mouche stylisée pour série d'animation 2D destinée aux enfants, dessinée dans un style croquis crayonné noir et blanc, façon test d'animation traditionnelle (pencil test) : traits de crayon esquissés à la main, légèrement imparfaits et vivants, pas de couleur, ombrage léger au trait ou au hachurage simple, fond blanc uni. Corps fin et élancé, nettement plus petite et plus mince que Zoum (silhouette opposée : Zoum est ronde et potelée, Radar est fine et compacte). Un œil légèrement plus plissé que l'autre en permanence (regard analytique fixe). Antennes longues, fines, parfaitement droites et rigides, bien plus longues que la tête. Petite marque triangulaire nette sur le dessus de la tête, toujours au même endroit. Ailes fines, nettes, symétriques, repliées avec précision contre le corps. Pattes fines et légèrement pliées, posture bien droite et immobile plutôt qu'agitée. Petits sourcils fins esquissés au-dessus des yeux.

À ÉVITER : aucune couleur. Aucun rendu numérique lisse ou vectoriel — trait esquissé et légèrement irrégulier. Aucun réalisme d'insecte (pas de poils, pas d'yeux facettés réalistes). Pas de silhouette ronde/potelée — doit rester fine et élancée, à l'opposé de Zoum. Aucun watermark, logo ou icône scintillante. Pas de texte dans l'image. Pas de deuxième personnage.
```

## Statut

**Référence validée** dès la première génération (silhouette fine, marque triangulaire, antennes droites, regard sceptique tous conformes).

## Personnalité / émotion dominante

- **Traits de personnalité** : observatrice, stratège, sceptique, calme
- **Émotion dominante** : scepticisme mesuré — un sourcil plus haut que l'autre, posture droite et immobile
- **Vocalisations non-verbales** : petit bourdonnement bref et sec pour marquer sa désapprobation

## Gamme d'expressions — validée

| Expression | Description |
|---|---|
| Scepticisme appuyé | Un sourcil très haut, l'autre bas, regard de côté, bouche pincée |
| Exaspération | Yeux fermés, une antenne qui retombe |
| Alerte/vigilance | Yeux grands ouverts et fixes, antennes bien droites et tendues |
| Petit sourire en coin | Coin de bouche légèrement relevé, regard satisfait |

À ranger dans `/10-zoum-et-radar/02-references/radar/` (référence de base + planche d'expressions, rogner le badge scintillant avant export).

## Séquence de réaction — validée (test qualité manuel)

Petite séquence de 4 frames (réaction de surprise/alerte), produite en visant la perfection frame par frame plutôt que le volume — chaque frame vérifiée rigoureusement (silhouette, détails distinctifs, amplitude) avant de continuer la chaîne.

| Frame | Contenu |
|---|---|
| frame-01 | Neutre (référence de base) |
| frame-02 | Elle remarque quelque chose — les deux yeux s'écarquillent légèrement |
| frame-03 | Choc maximal — yeux au maximum, antennes dressées et raides, recul du corps |
| frame-04 | Elle se reprend — retour au regard asymétrique caractéristique, posture stable, antennes encore un peu relevées |

Une erreur de référence croisée (image de Zoum utilisée par erreur) a été détectée et corrigée dès la vérification de la frame 2 — bon test de la rigueur de vérification par paire.

À ranger dans `/10-zoum-et-radar/04-mouvements/radar/reaction-alerte/frame-01.png` à `frame-04.png` (recadrage automatique via `/99-tests-process/scripts/auto-crop-normalize.py`).

## Scène duo — validée

Une première scène avec Zoum a été générée avec succès (Zoum penchée avidement vers hors-champ, Radar immobile à côté, bras croisés, regard sceptique) — confirme l'échelle relative et la lisibilité du duo ensemble. À ranger dans `/10-zoum-et-radar/02-references/duo/`.
