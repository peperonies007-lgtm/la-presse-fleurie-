"use client";

import { useEffect, useState } from "react";
import { FlowerIcon } from "./FlowerIcons";
import { getMyCarnet } from "@/lib/carnet";
import Link from "next/link";

export default function CarnetModal({ onClose }) {
  const [carnet, setCarnet] = useState(null);
  const archiveCount = carnet?.archiveCount;

  useEffect(() => {
    getMyCarnet().then(setCarnet);
  }, []);

  return (
    <div className="modal-overlay">
      <button type="button" className="modal-backdrop" aria-label="Fermer" onClick={onClose} />
      <div className="modal-box" role="dialog" aria-label="Mon herbier personnel">
        <button type="button" className="modal-close" onClick={onClose}>Fermer ✕</button>
        <span className="eyebrow">Mon herbier personnel</span>

        {!carnet ? (
          <h2>Chargement…</h2>
        ) : carnet.mode === "logged-out" ? (
          <>
            <h2>Connectez-vous pour voir votre herbier</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "0.8rem" }}>
              Une fois connecté·e, chaque pièce que vous achetez apparaît ici automatiquement.
            </p>
          </>
        ) : (
          <>
            <h2>
              {carnet.possedees.length} pièce{carnet.possedees.length > 1 ? "s" : ""} collectionnée
              {carnet.possedees.length > 1 ? "s" : ""}
              {archiveCount ? ` sur ${archiveCount} créées` : ""}
            </h2>
            {carnet.mode === "demo" && (
              <p style={{ color: "var(--ink-soft)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                (Exemple de démonstration — Supabase n&apos;est pas configuré.)
              </p>
            )}
            {archiveCount && (
              <div className="carnet-progress">
                <div
                  className="carnet-progress-fill"
                  style={{ width: `${Math.min(100, Math.round((carnet.possedees.length / archiveCount) * 1000) / 10)}%` }}
                />
              </div>
            )}

            {carnet.possedees.length === 0 ? (
              <p style={{ color: "var(--ink-soft)", marginTop: "1rem" }}>
                Vous n&apos;avez encore rien collectionné —{" "}
                <Link href="/galerie" onClick={onClose} style={{ textDecoration: "underline" }}>
                  découvrez la galerie
                </Link>
                .
              </p>
            ) : (
              <div className="carnet-grid">
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
                        <Link href={`/galerie/${m.slug}`} onClick={onClose}>{m.statut} →</Link>
                      ) : (
                        m.statut
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
