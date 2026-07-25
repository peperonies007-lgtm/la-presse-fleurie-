import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

export const metadata = {
  title: "La Presse Fleurie — Créations florales séchées, pièces uniques",
  description:
    "Bouquets et couronnes de fleurs séchées, composés à la main, chacun unique et numéroté comme une planche d'herbier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
