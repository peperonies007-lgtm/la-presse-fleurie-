"use server";

import { createClient } from "./supabase/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function requestMagicLink(prevState, formData) {
  const email = String(formData.get("email") || "").trim();

  if (!email || !email.includes("@")) {
    return { ok: false, message: "Merci d'indiquer une adresse email valide." };
  }

  const supabase = await createClient();

  if (!supabase) {
    console.log(`[dev] Lien de connexion demandé pour ${email} — Supabase n'est pas encore configuré (voir .env.local.example).`);
    return {
      ok: false,
      message:
        "La connexion par email n'est pas encore activée sur cette version de démonstration (il manque la configuration Supabase). Votre demande a été notée dans les logs du serveur.",
    };
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${SITE_URL}/auth/callback` },
  });

  if (error) {
    return { ok: false, message: "Une erreur est survenue, réessayez dans un instant." };
  }

  return { ok: true, message: `Un lien de connexion vient d'être envoyé à ${email}.` };
}

export async function signOut() {
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
}

export async function submitSurMesure(prevState, formData) {
  const payload = {
    nom: String(formData.get("nom") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    occasion: String(formData.get("occasion") || "").trim(),
    palette: String(formData.get("palette") || "").trim(),
    budget: String(formData.get("budget") || "").trim(),
    delai: String(formData.get("delai") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  if (!payload.nom || !payload.email || !payload.occasion) {
    return { ok: false, message: "Merci de remplir au moins votre nom, votre email et l'occasion." };
  }

  const supabase = await createClient();

  if (!supabase) {
    console.log("[dev] Nouvelle demande sur-mesure (Supabase/Resend non configurés) :", payload);
    return {
      ok: true,
      message:
        "Votre demande a bien été enregistrée dans les logs de développement. Une fois Supabase et Resend configurés, elle sera aussi écrite en base et vous recevrez un email de confirmation.",
    };
  }

  const { error } = await supabase.from("demandes_sur_mesure").insert(payload);

  if (error) {
    return { ok: false, message: "Une erreur est survenue lors de l'envoi, réessayez." };
  }

  return { ok: true, message: "Votre demande a bien été envoyée — vous recevrez une réponse sous 48h." };
}

// Retourne la session courante (ou null) — utilisé par le carnet de collection
// et par l'en-tête pour savoir si quelqu'un est connecté.
export async function getCurrentUser() {
  const supabase = await createClient();
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user;
}
