# Fiche personnage — Zoum

## Identité

- **Nom** : Zoum
- **Rôle dans le duo** : la gourmande impulsive — fonce sur toute nourriture repérée, se fait chasser sans arrêt, ne retient jamais la leçon

## Description physique complète et figée

- **Silhouette / gabarit** : corps rond et potelé, personnage de référence pour l'échelle du duo (100 %), nettement plus grande/large que Radar
- **Détails distinctifs qui ne doivent jamais changer** :
  - Joues gonflées en permanence (comme si elle avait toujours la bouche pleine)
  - Une antenne bien droite, l'autre cassée/pliée à mi-hauteur
  - Petite tache ronde façon éclaboussure de sauce sur le dessus du thorax, toujours au même endroit
  - Ailes légèrement irrégulières, un bord plus effiloché que l'autre
  - Grands yeux ronds très expressifs avec petits sourcils épais esquissés
  - **Exactement 2 bras et 2 jambes, jamais plus** (stylisation chibi, pas d'anatomie réaliste d'insecte à 6 pattes) — biais constaté du modèle à surveiller : tendance à dessiner une paire de bras supplémentaire
- **Matière** : croquis crayonné noir et blanc (voir `/10-zoum-et-radar/00-bible/bible-artistique.md`)
- **Échelle relative** : 100 % — référence du duo

## Prompt de base PERSONNAGE

```
PERSONNAGE : Zoum, une mouche stylisée pour série d'animation 2D destinée aux enfants, dessinée dans un style croquis crayonné noir et blanc, façon test d'animation traditionnelle (pencil test) : traits de crayon esquissés à la main, légèrement imparfaits et vivants, pas de couleur, uniquement des nuances de gris et de noir, ombrage léger au trait ou au hachurage simple, fond blanc uni sans détail. Corps rond et potelé, joues gonflées en permanence (comme si elle avait toujours la bouche pleine — détail fixe, jamais dégonflées). Une antenne bien droite, l'autre cassée/pliée à mi-hauteur (détail distinctif fixe). Petite tache ronde façon éclaboussure de sauce sur le dessus du thorax, toujours au même endroit. Ailes légèrement irrégulières, un bord plus effiloché que l'autre. Grands yeux ronds très expressifs avec de petits sourcils épais esquissés au-dessus. Pattes fines, silhouette globale asymétrique et un peu bancale plutôt que parfaitement ronde. Exactement 2 bras et 2 jambes au total (stylisation chibi simple, jamais d'anatomie réaliste d'insecte à 6 pattes, jamais de paire de bras supplémentaire).

À ÉVITER : aucune couleur. Aucun rendu numérique lisse ou vectoriel — le trait doit rester esquissé et légèrement irrégulier. Aucun réalisme d'insecte (pas de poils, pas d'yeux facettés réalistes). Pas de silhouette parfaitement symétrique/ronde — les asymétries (antenne, aile, joues) doivent rester visibles. AUCUNE PAIRE DE BRAS SUPPLÉMENTAIRE — exactement 2 bras et 2 jambes, jamais 4 bras, jamais 6 membres. Aucun watermark, logo ou icône scintillante. Pas de texte dans l'image. Pas de deuxième personnage.
```

## Statut

**Référence validée** dès la première génération (silhouette, joues, antenne cassée, tache de sauce tous conformes).

## Personnalité / émotion dominante

- **Traits de personnalité** : gourmande, impulsive, tenace, jamais découragée
- **Émotion dominante** : excitation/enthousiasme — toujours penchée en avant, prête à foncer
- **Vocalisations non-verbales** : bourdonnement qui s'accélère quand elle repère quelque chose

## Gamme d'expressions — validée

| Expression | Description |
|---|---|
| Excitation extrême | Yeux exorbités, bouche grande ouverte |
| Déception totale | Yeux mi-clos, joues affaissées, bouche tombante |
| Satisfaction gourmande | Yeux plissés de plaisir, sourire béat |
| Panique | Yeux écarquillés, antenne cassée tremblante, mains sur les joues |

À ranger dans `/10-zoum-et-radar/02-references/zoum/` (référence de base + planche d'expressions, rogner le badge scintillant avant export).

## Bibliothèque de mouvements

### S'élancer vers l'avant (8 frames) — validé, premier test complet en 2D

| Frame | Contenu | Méthode |
|---|---|---|
| frame-01 | Pose neutre (référence) | Réutilisation de la référence validée |
| frame-02 | Anticipation légère — corps tassé, poings serrés | Génération en lot de 3, sélectionnée |
| frame-03 | Anticipation maximale — ressort comprimé | Génération en lot de 3 ("Anticipation C"), sélectionnée |
| frame-04 | Départ du bond — une jambe pousse encore au sol | Génération en lot de 3, sélectionnée |
| frame-05 | Mi-élan — corps étiré, jambes décollées | Génération en lot de 3, sélectionnée |
| frame-06 | Élan avancé — bras tendu, jambes traînant derrière | Génération en lot de 3, sélectionnée |
| frame-07 | Presque extension max | Génération en lot de 3, sélectionnée |
| frame-08 | Extension complète (limite naturelle de la silhouette potelée) | Génération en lot de 3, sélectionnée |

**Enseignement clé de ce test** : un biais anatomique récurrent (paire de bras supplémentaire) a résisté à des corrections de prompt répétées en génération isolée, mais a disparu dès la génération en lot de 3 variantes avec sélection — cette méthode est désormais la stratégie de repli par défaut (voir `/01-scripts/technique-de-prompt.md`).

À ranger dans `/10-zoum-et-radar/04-mouvements/zoum/s-elancer/frame-01.png` à `frame-08.png`.
