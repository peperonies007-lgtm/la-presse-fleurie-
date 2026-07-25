"use client";

import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

export default function AddToCartButton({ slug, disabled }) {
  const { addToCart } = useCart();
  const router = useRouter();

  if (disabled) {
    return (
      <button type="button" className="btn primary" disabled>
        Pièce déjà vendue
      </button>
    );
  }

  return (
    <button
      type="button"
      className="btn primary"
      onClick={() => {
        addToCart(slug);
        router.push("/panier");
      }}
    >
      Réserver cette pièce
    </button>
  );
}
