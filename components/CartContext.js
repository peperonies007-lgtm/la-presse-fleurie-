"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "lpf-cart";

export function CartProvider({ children }) {
  const [slugs, setSlugs] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(stored)) setSlugs(stored);
    } catch {
      // localStorage indisponible ou contenu invalide : on repart d'un panier vide
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  }, [slugs, hydrated]);

  function addToCart(slug) {
    setSlugs((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
  }

  function removeFromCart(slug) {
    setSlugs((prev) => prev.filter((s) => s !== slug));
  }

  function clearCart() {
    setSlugs([]);
  }

  return (
    <CartContext.Provider value={{ slugs, addToCart, removeFromCart, clearCart, hydrated }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé à l'intérieur de <CartProvider>");
  return ctx;
}
