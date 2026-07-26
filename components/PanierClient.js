"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { FlowerIcon } from "@/components/FlowerIcons";

export default function PanierClient({ pieces }) {
  const { slugs, removeFromCart, hydrated } = useCart();
  const bySlug = (slug) => pieces.find((p) => p.slug === slug);
  const items = slugs.map(bySlug).filter(Boolean);
  const total = items.reduce((sum, p) => sum + p.prix, 0);

  if (!hydrated) return null;

  return (
    <section className="cart-page">
      <h1>Mon panier</h1>

      {items.length === 0 ? (
        <div className="cart-empty">
          Votre panier est vide. <Link href="/galerie" style={{ textDecoration: "underline" }}>Découvrir la galerie →</Link>
        </div>
      ) : (
        <>
          {items.map((piece) => (
            <div className="cart-row" key={piece.slug}>
              <div className="plate" style={{ "--plate-color": "#F3EDDF" }}>
                <div className="view-illustration active">
                  <FlowerIcon name={piece.icon} />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <span className="latin" style={{ display: "block" }}>{piece.latin}</span>
                <span className="meta">N° {piece.numero}</span>
              </div>
              <span className="price-tag">{piece.prix} €</span>
              <button type="button" className="waitlist-link" onClick={() => removeFromCart(piece.slug)}>
                Retirer
              </button>
            </div>
          ))}

          <div className="cart-row" style={{ borderBottom: "none", fontWeight: 600 }}>
            <span style={{ flex: 1 }}>Total</span>
            <span className="price-tag">{total} €</span>
          </div>

          <Link href="/commande" className="btn primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            Passer à la commande
          </Link>
        </>
      )}
    </section>
  );
}
