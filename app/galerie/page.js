import Link from "next/link";
import { SpecimenCard } from "@/components/SpecimenCard";
import { getPieces, getArchiveCount } from "@/lib/pieces";

export const metadata = {
  title: "La Galerie — La Presse Fleurie",
  description: "Toutes les créations florales séchées actuellement disponibles, pièces uniques.",
};

export const revalidate = 30;

export default async function GaleriePage() {
  const [pieces, archiveCount] = await Promise.all([getPieces(), getArchiveCount()]);

  return (
    <section className="gallery">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">La Galerie</span>
          <h1>Des pièces uniques, jamais recréées</h1>
          <p>
            {pieces.length} créations sur {archiveCount} jamais réalisées sont montrées ici.
            Une fois vendue, une pièce disparaît de cette page — mais reste consultable
            dans votre <Link href="/compte/ma-collection" style={{ textDecoration: "underline" }}>herbier personnel</Link> si elle vous appartient.
          </p>
        </div>

        <div className="gallery-grid">
          {pieces.map((piece) => (
            <Link
              href={`/galerie/${piece.slug}`}
              style={{ textDecoration: "none", display: "block" }}
              key={piece.slug}
            >
              <SpecimenCard piece={piece} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
