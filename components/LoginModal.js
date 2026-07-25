"use client";

import { useActionState } from "react";
import { requestMagicLink } from "@/lib/actions";

const initialState = { ok: false, message: "" };

export default function LoginModal({ onClose }) {
  const [state, action, pending] = useActionState(requestMagicLink, initialState);

  return (
    <div className="modal-overlay">
      <button type="button" className="modal-backdrop" aria-label="Fermer" onClick={onClose} />
      <div className="modal-box narrow" role="dialog" aria-label="Se connecter">
        <button type="button" className="modal-close" onClick={onClose}>Fermer ✕</button>
        <span className="eyebrow">Se connecter</span>
        <h2>Retrouvez votre herbier personnel</h2>

        <form className="login-form" action={action}>
          <div className="field">
            <label htmlFor="login-email">Adresse email</label>
            <input id="login-email" type="email" name="email" placeholder="vous@email.fr" required />
          </div>
          <button type="submit" className="btn primary block" disabled={pending}>
            {pending ? "Envoi en cours…" : "Recevoir mon lien de connexion"}
          </button>
          {state?.message && (
            <p className="login-note" style={{ color: state.ok ? "var(--sage)" : "var(--ink-soft)" }}>
              {state.message}
            </p>
          )}
          <p className="login-note">Pas de mot de passe à retenir — on vous envoie un lien sécurisé, valable 15 minutes.</p>
          <div className="login-divider">ou</div>
          <button type="button" className="login-guest" onClick={onClose}>
            Continuer sans compte pour cette commande →
          </button>
        </form>
      </div>
    </div>
  );
}
