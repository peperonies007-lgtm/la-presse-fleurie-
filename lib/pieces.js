import { createClient } from "./supabase/public";
import { pieces as mockPieces, archiveCount as mockArchiveCount } from "./data";

function mapRow(row) {
  return {
    slug: row.slug,
    numero: row.numero,
    latin: row.latin,
    type: row.type,
    provenance: row.provenance,
    recolte: row.recolte,
    prix: Number(row.prix),
    statut: row.statut,
    icon: row.icon,
    featured: row.featured,
    flag: row.flag || undefined,
    note: row.note || undefined,
    certificat:
      row.certificat_region && row.certificat_sechage
        ? { region: row.certificat_region, sechage: row.certificat_sechage }
        : undefined,
  };
}

// Toutes ces fonctions retombent sur les données de démonstration
// (lib/data.js) si Supabase n'est pas configuré, ou si la table `pieces`
// n'a pas encore été créée/peuplée (voir supabase/002_pieces_et_carnet.sql).

export async function getPieces() {
  const supabase = await createClient();
  if (!supabase) return mockPieces;

  const { data, error } = await supabase
    .from("pieces")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data || data.length === 0) return mockPieces;

  return data.map(mapRow);
}

export async function getPieceBySlug(slug) {
  const supabase = await createClient();
  if (!supabase) return mockPieces.find((p) => p.slug === slug);

  const { data, error } = await supabase
    .from("pieces")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return mockPieces.find((p) => p.slug === slug);

  return mapRow(data);
}

export async function getArchiveCount() {
  const supabase = await createClient();
  if (!supabase) return mockArchiveCount;

  const { count, error } = await supabase
    .from("pieces")
    .select("*", { count: "exact", head: true });

  if (error || !count) return mockArchiveCount;

  return count;
}
