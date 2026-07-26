"use client";

import { useState } from "react";
import { FlowerIcon } from "./FlowerIcons";

const TAPE_COLOR = {
  peony: "var(--terracotta)",
  ranunculus: "var(--terracotta)",
  eucalyptus: "var(--sage)",
  craspedia: "var(--ochre)",
  delphinium: "var(--powder)",
  rose: "var(--terracotta)",
  hydrangea: "var(--powder)",
  lavande: "var(--powder)",
  gypsophile: "var(--sage)",
  immortelle: "var(--ochre)",
  statice: "var(--powder)",
  pampa: "var(--ochre)",
  lagurus: "var(--sage)",
  protea: "var(--terracotta)",
  anemone: "var(--sage)",
  coquelicot: "var(--terracotta)",
  bleuet: "var(--powder)",
  amarante: "var(--terracotta)",
  celosie: "var(--terracotta)",
  achillee: "var(--ochre)",
  tournesol: "var(--ochre)",
  camomille: "var(--sage)",
  coton: "var(--sage)",
  chardon: "var(--powder)",
  banksia: "var(--ochre)",
};

// Photo de démonstration uniquement (libre de droits, Evie S. / Unsplash) —
// à remplacer par une vraie photo par pièce une fois le shooting fait.
const DEMO_PHOTO = "/demo-photo.jpg";

export function SpecimenCard({ piece, size = "normal", onWaitlist, className = "" }) {
  const [showPhoto, setShowPhoto] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const isSold = piece.statut === "vendue";
  const isFeatured = size === "featured";
  const hasCertificate = isFeatured && piece.certificat;

  const plate = (
    <div className="plate" style={{ "--plate-color": "#F3EDDF" }}>
      {isSold && <div className="ink-stamp">Vendue</div>}
      <div className={`view-illustration${!showPhoto ? " active" : ""}`}>
        {piece.illustration ? (
          <img src={piece.illustration} alt={piece.latin} className="illustration-img" />
        ) : (
          <FlowerIcon name={piece.icon} />
        )}
      </div>
      <div className={`view-photo${showPhoto ? " active" : ""}`}>
        <img src={DEMO_PHOTO} alt={`Photo de démonstration — ${piece.latin}`} />
      </div>
      <button
        type="button"
        className="photo-toggle-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowPhoto((v) => !v);
        }}
      >
        {showPhoto ? "Voir le dessin" : "Voir la photo"}
      </button>
    </div>
  );

  const labelContent = (
    <div className="label">
      {isFeatured && piece.flag && <span className="featured-flag">{piece.flag}</span>}
      <span className="latin">{piece.latin}</span>
      <span className="provenance">Cueillie {piece.provenance}</span>
      <div className="meta">
        <span className="num">N° {piece.numero}</span>
        {piece.type === "Couronne" && <span>Couronne</span>}
        <span className={`status ${isSold ? "sold" : "available"}`}>
          {isSold ? "Vendue" : "Disponible"}
        </span>
      </div>
      {!isSold && <span className="price-tag">{piece.prix} €</span>}
      {isFeatured && piece.note && <p className="note">{piece.note}</p>}
      {isSold && onWaitlist && (
        <button
          type="button"
          className="waitlist-link"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onWaitlist(piece);
          }}
        >
          Prévenez-moi de la prochaine collection
        </button>
      )}
      {hasCertificate && (
        <button
          type="button"
          className="flip-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFlipped((v) => !v);
          }}
        >
          {flipped ? "← Retour à la pièce" : "Voir le certificat d'authenticité →"}
        </button>
      )}
    </div>
  );

  const cardClass = `specimen${isFeatured ? " featured" : ""}${isSold ? " sold" : ""}${className ? ` ${className}` : ""}`;

  if (!hasCertificate) {
    return (
      <div className={cardClass}>
        <div className="tape" style={{ "--tape-color": TAPE_COLOR[piece.icon] }} />
        {plate}
        {labelContent}
      </div>
    );
  }

  return (
    <div className={`${cardClass} flip-card`}>
      <div className={`flip-inner${flipped ? " flipped" : ""}`}>
        <div className="flip-front">
          <div className="tape" style={{ "--tape-color": TAPE_COLOR[piece.icon] }} />
          {plate}
          {labelContent}
        </div>
        <div className="flip-back">
          <span className="eyebrow">Certificat d&apos;authenticité</span>
          <p className="cert-line">Composition unique n° {piece.numero} — jamais reproduite</p>
          <p className="cert-line">Cueillie et séchée à la main {piece.certificat.region}</p>
          <p className="cert-line">Temps de séchage : {piece.certificat.sechage}</p>
          <p className="cert-sign">— [Prénom]</p>
          <button
            type="button"
            className="flip-btn"
            onClick={() => setFlipped(false)}
          >
            ← Retour à la pièce
          </button>
        </div>
      </div>
    </div>
  );
}
