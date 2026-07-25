import { notFound } from "next/navigation";
import { SpecimenCard } from "@/components/SpecimenCard";
import AddToCartButton from "@/components/AddToCartButton";
import { getPieces, getPieceBySlug } from "@/lib/pieces";

export async function generateStaticParams() {
  const pieces = await getPieces();
  return pieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const piece = await getPieceBySlug(slug);
  if (!piece) return {};
  return {
    title: `${piece.latin} — La Presse Fleurie`,
    description: `${piece.type} unique, spécimen n° ${piece.numero}, cueilli ${piece.provenance}.`,
  };
}

export default async function PieceDetailPage({ params }) {
  const { slug } = await params;
  const piece = await getPieceBySlug(slug);

  if (!piece) notFound();

  const isSold = piece.statut === "vendue";

  return (
    <section className="gallery">
      <div className="container" style={{ maxWidth: 720 }}>
        <SpecimenCard piece={{ ...piece, flag: undefined }} size="featured" />

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <AddToCartButton slug={piece.slug} disabled={isSold} />
        </div>
      </div>
    </section>
  );
}
