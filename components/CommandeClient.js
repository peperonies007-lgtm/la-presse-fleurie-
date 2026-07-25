"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CommandeClient({ pieces }) {
  const { slugs, hydrated } = useCart();
  const bySlug = (slug) => pieces.find((p) => p.slug === slug);
  const items = slugs.map(bySlug).filter(Boolean);
  const total = items.reduce((sum, p) => sum + p.prix, 0);

  if (!hydrated) return null;

  if (items.length === 0) {
    return (
      <section className="order-page">
        <h1>Votre commande</h1>
        <div className="cart-empty">
          Votre panier est vide. <Link href="/galerie" style={{ textDecoration: "underline" }}>Découvrir la galerie →</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="order-page">
      <h1>Récapitulatif de votre commande</h1>

      {items.map((piece) => (
        <div className="cart-row" key={piece.slug}>
          <div style={{ flex: 1 }}>
            <span className="latin" style={{ display: "block" }}>{piece.latin}</span>
            <span className="meta">N° {piece.numero} — {piece.type}</span>
          </div>
          <span className="price-tag">{piece.prix} €</span>
        </div>
      ))}

      <div className="cart-row" style={{ borderBottom: "none", fontWeight: 600 }}>
        <span style={{ flex: 1 }}>Total</span>
        <span className="price-tag">{total} €</span>
      </div>

      <div className="payment-placeholder">
        Le paiement (Stripe) n&apos;est pas encore branché sur cette version de démonstration —
        cette étape reste volontairement à construire en dernier. Une fois activé, cette page
        redirigera vers un paiement sécurisé puis vers la planche de confirmation numérotée.
      </div>
    </section>
  );
}
