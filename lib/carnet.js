"use server";

import { createClient } from "./supabase/server";
import { mockCarnet, archiveCount as mockArchiveCount } from "./data";

async function countArchive(supabase) {
  const { count, error } = await supabase
    .from("pieces")
    .select("*", { count: "exact", head: true });
  return error || !count ? mockArchiveCount : count;
}

// Retourne l'état du carnet de collection de la personne connectée, avec le
// nombre total de pièces archivées (utile pour "3 sur 47 créées").
// mode "demo"        : Supabase non configuré -> exemples de lib/data.js
// mode "logged-out"  : Supabase configuré mais personne n'est connecté
// mode "logged-in"   : vraies données (souvent vides tant que Stripe n'est pas branché)
export async function getMyCarnet() {
  const supabase = await createClient();

  if (!supabase) {
    return { mode: "demo", archiveCount: mockArchiveCount, ...mockCarnet };
  }

  const archiveCount = await countArchive(supabase);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { mode: "logged-out", archiveCount };
  }

  const { data, error } = await supabase
    .from("carnet")
    .select("acquise_le, pieces (numero, latin, icon)")
    .eq("user_id", user.id)
    .order("acquise_le", { ascending: false });

  if (error) {
    return { mode: "logged-in", email: user.email, possedees: [], archiveCount };
  }

  const possedees = (data || [])
    .filter((row) => row.pieces)
    .map((row) => ({
      numero: row.pieces.numero,
      latin: row.pieces.latin,
      icon: row.pieces.icon,
      acquiseLe: new Date(row.acquise_le).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    }));

  return { mode: "logged-in", email: user.email, possedees, archiveCount };
}
