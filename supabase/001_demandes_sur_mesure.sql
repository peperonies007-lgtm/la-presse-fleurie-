-- À exécuter une fois dans Supabase : Dashboard > SQL Editor > coller > Run.
-- Crée la table utilisée par le formulaire "Sur-mesure" (lib/actions.js).

create table if not exists demandes_sur_mesure (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  email text not null,
  occasion text not null,
  palette text,
  budget text,
  delai text,
  message text,
  created_at timestamptz not null default now()
);

alter table demandes_sur_mesure enable row level security;

-- Le formulaire public utilise la clé publique (anon) : on l'autorise à
-- insérer une demande, mais jamais à lire les demandes des autres.
create policy "Autoriser l'envoi public d'une demande sur-mesure"
  on demandes_sur_mesure
  for insert
  to anon
  with check (true);
