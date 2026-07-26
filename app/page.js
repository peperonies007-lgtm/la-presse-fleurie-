import Link from "next/link";
import { SpecimenCard } from "@/components/SpecimenCard";
import Ticker from "@/components/Ticker";
import Divider from "@/components/Divider";
import { MiscIcon } from "@/components/MiscIcons";
import { recentlySold, journalArticles } from "@/lib/data";
import { getPieces, getArchiveCount } from "@/lib/pieces";

export default async function HomePage() {
  const [pieces, archiveCount] = await Promise.all([getPieces(), getArchiveCount()]);
  const hero = pieces.find((p) => p.featured) || pieces[0];
  const galleryPreview = pieces.filter((p) => p.slug !== hero.slug).slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Créations florales séchées — pièces uniques</span>
            <h1>La fleur qui ne meurt <em>jamais</em>.</h1>
            <p className="lede">
              Chaque bouquet et chaque couronne est séché et composé à la main, numéroté comme
              une planche d&apos;herbier — puis jamais reproduit. Une fois vendue, une pièce
              n&apos;existe plus qu&apos;en photographie.
            </p>
            <div className="cta-row">
              <Link className="btn primary" href="/galerie">Découvrir la galerie</Link>
              <Link className="btn secondary" href="/sur-mesure">Commander une pièce sur-mesure</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-specimen-wrap">
              <div className="hero-flag">Coup de cœur du moment</div>
              <SpecimenCard piece={hero} />
            </div>
          </div>
        </div>
      </section>

      <Ticker items={recentlySold} />

      <section className="gallery" id="galerie">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>La Galerie</h2>
              <p>
                Des pièces uniques, jamais recréées à l&apos;identique. Consultez la collection
                telle qu&apos;elle existe aujourd&apos;hui — demain, elle sera différente.
              </p>
            </div>
            <div className="archive-note">
              <span className="archive-count">{String(archiveCount).padStart(3, "0")}</span> pièces archivées depuis 2024
              <br />
              <Link href="/galerie" className="waitlist-link">voir tout l&apos;herbier →</Link>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryPreview.map((piece, i) => (
              <Link
                href={`/galerie/${piece.slug}`}
                style={{ textDecoration: "none", display: "block" }}
                key={piece.slug}
              >
                <SpecimenCard piece={piece} className={`rotated-${i + 1}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="sur-mesure" id="sur-mesure">
        <div className="container sm-grid">
          <div>
            <span className="eyebrow">Sur-mesure</span>
            <h2>Une idée précise en tête ?</h2>
            <p>
              Racontez-moi l&apos;occasion, vos couleurs, votre budget — je réponds personnellement
              avec un devis et un délai. Aucune pièce sur-mesure n&apos;est facturée avant que nous
              soyons d&apos;accord sur la création.
            </p>
            <Link className="btn primary" href="/sur-mesure">Décrire mon projet</Link>
          </div>
          <div className="brief-card">
            <div className="row"><span>Occasion</span><span>Mariage — juin 2027</span></div>
            <div className="row"><span>Palette souhaitée</span><span>Terracotta, ocre</span></div>
            <div className="row"><span>Budget indicatif</span><span>150 – 300 €</span></div>
            <div className="row"><span>Délai</span><span>8 semaines</span></div>
          </div>
        </div>
      </section>

      <section className="journal" id="journal">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Le Journal</h2>
              <p>Le procédé, l&apos;entretien, les histoires derrière chaque récolte.</p>
            </div>
          </div>
          <div className="journal-grid">
            {journalArticles.map((article, i) => (
              <Link href={`/le-journal/${article.slug}`} className="journal-card" key={article.slug}>
                <div
                  className="journal-icon"
                  style={{ "--jc": ["var(--terracotta)", "var(--sage)", "var(--ochre)"][i % 3] }}
                >
                  <MiscIcon name={article.icon} />
                </div>
                <h3>{article.titre}</h3>
                <p>{article.extrait}</p>
                <span className="read-link">Lire l&apos;article</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="atelier" id="atelier">
        <div className="container atelier-inner">
          <p className="mark">
            « Je sèche et compose chaque fleur à la main, une par une. Ce que vous voyez ici
            n&apos;existera plus jamais ailleurs. »
          </p>
          <span className="sign">— [Prénom], fondatrice de La Presse Fleurie</span>
        </div>
      </section>
    </>
  );
}
