import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Page de redirection du lien magique envoyé par email (voir lib/actions.js).
export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/compte/ma-collection";

  if (code) {
    const supabase = await createClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/compte?erreur=connexion`);
}
