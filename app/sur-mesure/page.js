import SurMesureForm from "@/components/SurMesureForm";

export const metadata = {
  title: "Sur-mesure — La Presse Fleurie",
  description: "Commandez une création florale séchée sur-mesure, unique, pensée pour votre occasion.",
};

export default function SurMesurePage() {
  return (
    <section className="sur-mesure" style={{ minHeight: "60vh" }}>
      <div className="container">
        <div className="page-hero" style={{ padding: "0 0 2rem" }}>
          <span className="eyebrow">Sur-mesure</span>
          <h1>Décrivez votre projet</h1>
          <p>
            Racontez-moi l&apos;occasion, vos couleurs, votre budget — je réponds personnellement
            avec un devis et un délai sous 48h. Aucune pièce sur-mesure n&apos;est facturée avant
            que nous soyons d&apos;accord sur la création.
          </p>
        </div>
        <SurMesureForm />
      </div>
    </section>
  );
}
