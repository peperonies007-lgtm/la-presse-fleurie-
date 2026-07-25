import Link from "next/link";
import { FlowerIcon } from "@/components/FlowerIcons";
import { getMyCarnet } from "@/lib/carnet";

export const metadata = { title: "Mon herbier personnel — La Presse Fleurie" };

export default async function MaCollectionPage() {
  const carnet = await getMyCarnet();
  const { archiveCount } = carnet;

  if (carnet.mode === "logged-out") {
    return (
      <section className="cart-page">
        <h1>Mon herbier personnel</h1>
        <p style={{ color: "var(--ink-soft)" }}>
          Connectez-vous (bouton &quot;Se connecter&quot; en haut de page) pour voir les pièces
          que vous avez collectionnées.
        </p>
      </section>
    );
  }

  const pct = Math.min(100, Math.round((carnet.possedees.length / archiveCount) * 1000) / 10);

  return (
    <section className="gallery">
      <div className="container">
        <div className="page-hero" style={{ padding: "0 0 1rem" }}>
          <span className="eyebrow">Mon herbier personnel</span>
          <h1>{carnet.possedees.length} pièce{carnet.possedees.length > 1 ? "s" : ""} collectionnée{carnet.possedees.length > 1 ? "s" : ""} sur {archiveCount} créées</h1>
          {carnet.mode === "demo" && (
            <p style={{ color: "var(--ink-soft)" }}>(Exemple de démonstration — Supabase n&apos;est pas configuré.)</p>
          )}
        </div>
        <div className="carnet-progress" style={{ maxWidth: 400 }}>
          <div className="carnet-progress-fill" style={{ width: `${pct}%` }} />
        </div>

        {carnet.possedees.length === 0 ? (
          <p style={{ color: "var(--ink-soft)", marginTop: "1.5rem" }}>
            Vous n&apos;avez encore rien collectionné —{" "}
            <Link href="/galerie" style={{ textDecoration: "underline" }}>découvrez la galerie</Link>.
          </p>
        ) : (
          <div className="carnet-grid" style={{ marginTop: "2rem" }}>
            {carnet.possedees.map((p) => (
              <div className="carnet-slot collected" key={p.numero}>
                <div className="carnet-icon">
                  <FlowerIcon name={p.icon} />
                </div>
                <span className="carnet-name">{p.latin}</span>
                <span className="carnet-meta">N° {p.numero} — acquise le {p.acquiseLe}</span>
              </div>
            ))}

            {carnet.manquantes?.map((m, i) => (
              <div className="carnet-slot empty" key={i}>
                <div className="carnet-icon placeholder">?</div>
                <span className="carnet-name">{m.latin}</span>
                <span className="carnet-meta">
                  {m.slug ? (
                    <Link href={`/galerie/${m.slug}`}>{m.statut} →</Link>
                  ) : (
                    m.statut
                  )}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
