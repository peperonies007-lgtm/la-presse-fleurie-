export const metadata = {
  title: "Notre Atelier — La Presse Fleurie",
  description: "L'histoire et le procédé derrière chaque création florale séchée.",
};

export default function AtelierPage() {
  return (
    <section className="atelier" style={{ minHeight: "60vh" }}>
      <div className="container atelier-inner">
        <span className="eyebrow">Notre atelier</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", margin: "0.5rem 0 1.5rem" }}>
          Une fleur, une fois
        </h1>
        <p className="mark">
          « Je sèche et compose chaque fleur à la main, une par une. Aucune création
          n&apos;est reproduite : ce que vous voyez ici n&apos;existera plus jamais ailleurs. »
        </p>
        <p style={{ marginTop: "2rem", color: "var(--ink-soft)", textAlign: "left" }}>
          Chaque pièce commence par une récolte — chez des producteurs locaux ou dans mon propre
          jardin — puis un séchage lent, tête en bas, à l&apos;abri de la lumière, pendant deux à
          quatre semaines selon la fleur. Je compose ensuite chaque bouquet ou couronne sans
          modèle : ce que vous achetez est littéralement la seule version qui existera de cette
          composition.
        </p>
        <span className="sign">— [Prénom], fondatrice de La Presse Fleurie</span>
      </div>
    </section>
  );
}
