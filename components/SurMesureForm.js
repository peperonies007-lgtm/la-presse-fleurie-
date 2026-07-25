"use client";

import { useActionState } from "react";
import { submitSurMesure } from "@/lib/actions";

const initialState = { ok: false, message: "" };

export default function SurMesureForm() {
  const [state, action, pending] = useActionState(submitSurMesure, initialState);

  if (state?.ok) {
    return <div className="form-success">{state.message}</div>;
  }

  return (
    <form className="form-card" action={action}>
      <div className="field">
        <label htmlFor="sm-nom">Votre nom</label>
        <input id="sm-nom" name="nom" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="sm-email">Votre email</label>
        <input id="sm-email" name="email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="sm-occasion">Occasion</label>
        <input id="sm-occasion" name="occasion" type="text" placeholder="Mariage, naissance, deuil…" required />
      </div>
      <div className="field">
        <label htmlFor="sm-palette">Palette souhaitée</label>
        <input id="sm-palette" name="palette" type="text" placeholder="Terracotta, ocre, sauge…" />
      </div>
      <div className="field">
        <label htmlFor="sm-budget">Budget indicatif</label>
        <input id="sm-budget" name="budget" type="text" placeholder="150 – 300 €" />
      </div>
      <div className="field">
        <label htmlFor="sm-delai">Délai souhaité</label>
        <input id="sm-delai" name="delai" type="text" placeholder="8 semaines" />
      </div>
      <div className="field">
        <label htmlFor="sm-message">Votre projet en quelques mots</label>
        <textarea id="sm-message" name="message" />
      </div>

      {state?.message && !state.ok && (
        <p className="login-note" style={{ marginBottom: "1rem" }}>{state.message}</p>
      )}

      <button type="submit" className="btn primary block" disabled={pending}>
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
