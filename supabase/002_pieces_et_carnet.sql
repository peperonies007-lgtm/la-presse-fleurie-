-- Deuxième migration : à exécuter après 001 (voir schema.sql).
-- Dashboard Supabase > SQL Editor > coller > Run.

create table if not exists pieces (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  numero text not null,
  latin text not null,
  type text not null,
  provenance text not null,
  recolte text,
  prix numeric(10, 2) not null,
  statut text not null default 'disponible' check (statut in ('disponible', 'vendue')),
  icon text not null,
  featured boolean not null default false,
  flag text,
  note text,
  certificat_region text,
  certificat_sechage text,
  created_at timestamptz not null default now()
);

alter table pieces enable row level security;

-- Le catalogue est public : tout le monde peut le consulter.
create policy "Le catalogue est public en lecture"
  on pieces
  for select
  to anon, authenticated
  using (true);

-- "Mon herbier personnel" : quelles pièces appartiennent à quel client.
-- Sera rempli automatiquement à chaque achat une fois le paiement (Stripe) branché.
create table if not exists carnet (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  piece_id uuid not null references pieces(id) on delete cascade,
  acquise_le timestamptz not null default now(),
  unique (user_id, piece_id)
);

alter table carnet enable row level security;

-- Chaque client ne voit que ses propres pièces, jamais celles des autres.
create policy "Chacun ne voit que son propre herbier"
  on carnet
  for select
  to authenticated
  using (auth.uid() = user_id);

-- Données de démonstration : les 5 pièces déjà visibles sur le site.
insert into pieces (slug, numero, latin, type, provenance, recolte, prix, statut, icon, featured, flag, note, certificat_region, certificat_sechage)
values
  ('paeonia-officinalis-042', '042', 'Paeonia officinalis', 'Bouquet', 'en Provence', '12 mai 2026', 145, 'disponible', 'peony', true, 'Coup de cœur du moment', 'Composée avec des pivoines de fin de saison, cueillies à la main.', 'en Provence', '18 jours'),
  ('ranunculus-asiaticus-038', '038', 'Ranunculus asiaticus', 'Bouquet', 'dans la Drôme', '3 avril 2026', 89, 'disponible', 'ranunculus', false, null, null, 'dans la Drôme', '21 jours'),
  ('eucalyptus-cinerea-039', '039', 'Eucalyptus cinerea', 'Couronne', 'dans le Luberon', '15 février 2026', 120, 'disponible', 'eucalyptus', false, null, null, 'dans le Luberon', '14 jours'),
  ('craspedia-globosa-031', '031', 'Craspedia globosa', 'Bouquet', 'en Normandie', '8 janvier 2026', 78, 'vendue', 'craspedia', false, null, null, 'en Normandie', '25 jours'),
  ('delphinium-consolida-040', '040', 'Delphinium consolida', 'Bouquet', 'en Provence', '20 avril 2026', 95, 'disponible', 'delphinium', false, null, null, 'en Provence', '20 jours')
on conflict (slug) do nothing;
