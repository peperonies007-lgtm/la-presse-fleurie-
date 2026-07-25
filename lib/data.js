export const pieces = [
  {
    slug: "paeonia-officinalis-042",
    numero: "042",
    latin: "Paeonia officinalis",
    type: "Bouquet",
    provenance: "en Provence",
    recolte: "12 mai 2026",
    prix: 145,
    statut: "disponible",
    icon: "peony",
    featured: true,
    flag: "Coup de cœur du moment",
    note: "Composée avec des pivoines de fin de saison, cueillies à la main.",
    certificat: { region: "en Provence", sechage: "18 jours" },
  },
  {
    slug: "ranunculus-asiaticus-038",
    numero: "038",
    latin: "Ranunculus asiaticus",
    type: "Bouquet",
    provenance: "dans la Drôme",
    recolte: "3 avril 2026",
    prix: 89,
    statut: "disponible",
    icon: "ranunculus",
    certificat: {
      region: "dans la Drôme",
      sechage: "21 jours",
    },
  },
  {
    slug: "eucalyptus-cinerea-039",
    numero: "039",
    latin: "Eucalyptus cinerea",
    type: "Couronne",
    provenance: "dans le Luberon",
    recolte: "15 février 2026",
    prix: 120,
    statut: "disponible",
    icon: "eucalyptus",
    certificat: { region: "dans le Luberon", sechage: "14 jours" },
  },
  {
    slug: "craspedia-globosa-031",
    numero: "031",
    latin: "Craspedia globosa",
    type: "Bouquet",
    provenance: "en Normandie",
    recolte: "8 janvier 2026",
    prix: 78,
    statut: "vendue",
    icon: "craspedia",
    certificat: { region: "en Normandie", sechage: "25 jours" },
  },
  {
    slug: "delphinium-consolida-040",
    numero: "040",
    latin: "Delphinium consolida",
    type: "Bouquet",
    provenance: "en Provence",
    recolte: "20 avril 2026",
    prix: 95,
    statut: "disponible",
    icon: "delphinium",
    certificat: { region: "en Provence", sechage: "20 jours" },
  },
];

export const archiveCount = 47;

export const recentlySold = [
  "Craspedia globosa",
  "Anemone coronaria",
  "Protea cynaroides",
  "Nigella damascena",
];

export const journalArticles = [
  {
    slug: "fleur-sechee-ne-meurt-jamais",
    icon: "sprout",
    titre: "Pourquoi une fleur séchée ne meurt vraiment jamais",
    extrait:
      "Le procédé qui retire l'eau sans retirer la couleur — et pourquoi une pièce peut traverser dix ans sans faner.",
    contenu:
      "Une fleur fraîche fane parce que ses cellules perdent leur eau de façon désordonnée : les parois cellulaires s'effondrent, les pigments se dégradent. Le séchage à l'envers, lent et à l'abri de la lumière, retire l'eau progressivement tout en laissant la structure et une grande partie du pigment intacts. C'est cette lenteur qui fait toute la différence entre une fleur qui s'effondre et une pièce qui traverse les années.",
  },
  {
    slug: "entretenir-piece-sechee",
    icon: "heart",
    titre: "Entretenir une pièce séchée : les gestes qui la font durer",
    extrait:
      "Lumière, poussière, humidité — les trois règles simples pour garder votre spécimen intact des années.",
    contenu:
      "Trois ennemis seulement : le soleil direct (qui décolore), l'humidité (qui ramollit et fait moisir), et la poussière (qui s'accumule dans les pétales). Placez votre pièce loin d'une fenêtre plein sud, dans une pièce sèche, et dépoussiérez-la une fois par mois avec un sèche-cheveux à air froid, jamais avec un plumeau qui casserait les pétales.",
  },
  {
    slug: "offrir-un-souvenir",
    icon: "gift",
    titre: "Offrir un souvenir plutôt qu'un instant",
    extrait: "Pourquoi une fleur qui reste change ce que veut dire \"offrir des fleurs\".",
    contenu:
      "Offrir des fleurs fraîches, c'est offrir une semaine. Offrir une pièce séchée, c'est offrir un objet qui reste dans la maison de quelqu'un pendant des années, qui lui rappelle qui la lui a offerte à chaque fois qu'elle la regarde. C'est un changement de nature du cadeau, pas seulement de durée.",
  },
];

export function getPieceBySlug(slug) {
  return pieces.find((p) => p.slug === slug);
}

export function getArticleBySlug(slug) {
  return journalArticles.find((a) => a.slug === slug);
}

// Pièces déjà collectionnées par le client connecté — données factices en
// attendant qu'un vrai compte Supabase soit branché (voir lib/supabase.js).
export const mockCarnet = {
  possedees: [
    { numero: "042", latin: "Paeonia officinalis", icon: "peony", acquiseLe: "12 mai 2026" },
    { numero: "038", latin: "Ranunculus asiaticus", icon: "ranunculus", acquiseLe: "3 avril 2026" },
    { numero: "039", latin: "Eucalyptus cinerea", icon: "eucalyptus", acquiseLe: "15 février 2026" },
  ],
  manquantes: [
    { latin: "Craspedia globosa", statut: "Déjà vendue à quelqu'un d'autre" },
    { latin: "Delphinium consolida", statut: "Disponible dans la galerie", slug: "delphinium-consolida-040" },
    { latin: "Espèce inconnue", statut: "À découvrir dans une prochaine collection" },
    { latin: "Espèce inconnue", statut: "À découvrir dans une prochaine collection" },
  ],
};
