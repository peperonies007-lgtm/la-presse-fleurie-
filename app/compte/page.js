import Link from "next/link";
import { getCurrentUser } from "@/lib/actions";
import { isSupabaseConfigured } from "@/lib/supabase/server";

export const metadata = { title: "Mon compte — La Presse Fleurie" };

export default async function ComptePage() {
  const configured = isSupabaseConfigured();
  const user = configured ? await getCurrentUser() : null;

  return (
    <section className="cart-page">
      <h1>Mon compte</h1>

      {!configured && (
        <p style={{ color: "var(--ink-soft)", marginBottom: "1.5rem" }}>
          La connexion par lien magique sera pleinement fonctionnelle une fois Supabase configuré
          (voir <code>.env.local.example</code>).
        </p>
      )}

      {configured && !user && (
        <p style={{ color: "var(--ink-soft)", marginBottom: "1.5rem" }}>
          Vous n&apos;êtes pas connecté·e — utilisez le bouton &quot;Se connecter&quot; en haut de
          page pour recevoir un lien de connexion par email.
        </p>
      )}

      {user && (
        <p style={{ color: "var(--ink-soft)", marginBottom: "1.5rem" }}>
          Connecté·e en tant que <strong>{user.email}</strong>.
        </p>
      )}

      <Link href="/compte/ma-collection" className="btn primary">
        Voir mon herbier personnel
      </Link>
    </section>
  );
}
