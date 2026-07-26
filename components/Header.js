"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CarnetModal from "./CarnetModal";
import LoginModal from "./LoginModal";
import Logo from "./Logo";
import { useCart } from "./CartContext";
import { createClient } from "@/lib/supabase/client";
import { signOut } from "@/lib/actions";

export default function Header() {
  const [openModal, setOpenModal] = useState(null); // "carnet" | "login" | null
  const [user, setUser] = useState(undefined); // undefined = pas encore vérifié, null = pas connecté
  const { slugs } = useCart();
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) {
      setUser(null);
      return;
    }

    supabase.auth.getUser().then(({ data }) => setUser(data.user || null));

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await signOut();
    setUser(null);
    router.refresh();
  }

  return (
    <>
      <header className="site">
        <div className="container nav-row">
          <Link href="/" className="wordmark" style={{ display: "flex", alignItems: "center" }}>
            <Logo variant="horizontal" size={32} />
          </Link>
          <nav className="links">
            <Link href="/galerie">Galerie</Link>
            <Link href="/sur-mesure">Sur-mesure</Link>
            <Link href="/notre-atelier">Notre atelier</Link>
            <Link href="/le-journal">Le journal</Link>
            <Link href="/panier">Panier{slugs.length > 0 ? ` (${slugs.length})` : ""}</Link>
            <button type="button" onClick={() => setOpenModal("carnet")}>
              Mon carnet
            </button>
            {user ? (
              <button type="button" onClick={handleSignOut} title={user.email}>
                Se déconnecter
              </button>
            ) : (
              <button type="button" onClick={() => setOpenModal("login")}>
                Se connecter
              </button>
            )}
          </nav>
        </div>
      </header>

      {openModal === "carnet" && (
        <CarnetModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === "login" && (
        <LoginModal onClose={() => setOpenModal(null)} />
      )}
    </>
  );
}
