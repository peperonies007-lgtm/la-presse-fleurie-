import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>La Presse Fleurie</h4>
            <p style={{ maxWidth: "32ch", color: "var(--ink-soft)", fontSize: "0.9rem" }}>
              Créations florales séchées composées à la main. Une pièce, une fois, jamais recréée.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/galerie">Galerie</Link></li>
              <li><Link href="/sur-mesure">Sur-mesure</Link></li>
              <li><Link href="/notre-atelier">Notre atelier</Link></li>
              <li><Link href="/le-journal">Le journal</Link></li>
            </ul>
          </div>
          <div>
            <h4>Ne rien manquer</h4>
            <div className="newsletter-card">
              <p>Une pièce se vend en moyenne en 3 jours. Soyez prévenu·e dès qu&apos;une nouvelle collection est prête.</p>
              <form className="newsletter-row">
                <input type="email" placeholder="votre@email.fr" aria-label="Adresse email" />
                <button type="submit">S&apos;inscrire</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© La Presse Fleurie</span>
          <span>Créations florales séchées — pièces uniques</span>
        </div>
      </div>
    </footer>
  );
}
