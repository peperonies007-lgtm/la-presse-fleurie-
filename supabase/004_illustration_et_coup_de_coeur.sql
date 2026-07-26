-- Quatrième migration : ajoute une colonne "illustration" (chemin vers une
-- vraie image, au lieu du dessin SVG codé en dur) et bascule le coup de cœur
-- de la page d'accueil sur le coquelicot (premier test de la nouvelle DA).
-- Dashboard Supabase > SQL Editor > coller > Run.

alter table pieces add column if not exists illustration text;

update pieces
set featured = false, flag = null
where slug = 'paeonia-officinalis-042';

update pieces
set
  featured = true,
  flag = 'Coup de cœur du moment',
  illustration = '/flowers/coquelicot-v4.png',
  note = 'Le premier essai de notre nouvelle identité visuelle, testé grandeur nature.'
where slug = 'papaver-rhoeas-053';
