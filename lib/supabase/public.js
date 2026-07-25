import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

// Client public en lecture seule, sans session utilisateur. À utiliser pour
// tout ce qui est public (le catalogue "pieces"), y compris dans des
// contextes sans requête HTTP comme `generateStaticParams`, où le client
// cookie-aware de ./server.js ne peut pas fonctionner (pas de cookies()
// disponible en dehors d'une requête).
export function createClient() {
  if (!isSupabaseConfigured()) return null;

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
