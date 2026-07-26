-- Troisième migration : ajoute 20 nouvelles espèces au catalogue (données de
-- démonstration, à remplacer par votre vrai inventaire quand vous serez prête).
-- Dashboard Supabase > SQL Editor > coller > Run.

insert into pieces (slug, numero, latin, type, provenance, recolte, prix, statut, icon, featured, flag, note, certificat_region, certificat_sechage)
values
  ('rosa-damascena-043', '043', 'Rosa damascena', 'Bouquet', 'au Kenya', '2 mai 2026', 155, 'disponible', 'rose', false, null, null, 'au Kenya', '22 jours'),
  ('hydrangea-macrophylla-044', '044', 'Hydrangea macrophylla', 'Bouquet', 'en Bretagne', '18 juin 2026', 110, 'disponible', 'hydrangea', false, null, null, 'en Bretagne', '16 jours'),
  ('lavandula-angustifolia-045', '045', 'Lavandula angustifolia', 'Bouquet', 'en Provence', '10 juillet 2026', 68, 'disponible', 'lavande', false, null, null, 'en Provence', '15 jours'),
  ('gypsophila-paniculata-046', '046', 'Gypsophila paniculata', 'Bouquet', 'aux Pays-Bas', '5 mars 2026', 72, 'disponible', 'gypsophile', false, null, null, 'aux Pays-Bas', '12 jours'),
  ('helichrysum-italicum-047', '047', 'Helichrysum italicum', 'Bouquet', 'en Provence', '22 juin 2026', 82, 'vendue', 'immortelle', false, null, null, 'en Provence', '19 jours'),
  ('limonium-sinuatum-048', '048', 'Limonium sinuatum', 'Bouquet', 'en Espagne', '14 mai 2026', 75, 'disponible', 'statice', false, null, null, 'en Espagne', '14 jours'),
  ('cortaderia-selloana-049', '049', 'Cortaderia selloana', 'Bouquet', 'en Argentine', '30 septembre 2025', 130, 'disponible', 'pampa', false, null, null, 'en Argentine', '28 jours'),
  ('lagurus-ovatus-050', '050', 'Lagurus ovatus', 'Bouquet', 'en Italie', '8 août 2025', 65, 'disponible', 'lagurus', false, null, null, 'en Italie', '13 jours'),
  ('protea-cynaroides-051', '051', 'Protea cynaroides', 'Bouquet', 'en Afrique du Sud', '11 avril 2026', 175, 'disponible', 'protea', false, 'Pièce rare', 'Une des espèces les plus difficiles à trouver de la collection.', 'en Afrique du Sud', '30 jours'),
  ('anemone-coronaria-052', '052', 'Anemone coronaria', 'Bouquet', 'en Provence', '6 mars 2026', 92, 'vendue', 'anemone', false, null, null, 'en Provence', '17 jours'),
  ('papaver-rhoeas-053', '053', 'Papaver rhoeas', 'Bouquet', 'dans le Gers', '19 juin 2026', 88, 'disponible', 'coquelicot', false, null, null, 'dans le Gers', '16 jours'),
  ('centaurea-cyanus-054', '054', 'Centaurea cyanus', 'Bouquet', 'en Normandie', '25 juin 2026', 70, 'disponible', 'bleuet', false, null, null, 'en Normandie', '15 jours'),
  ('amaranthus-caudatus-055', '055', 'Amaranthus caudatus', 'Bouquet', 'au Pérou', '2 octobre 2025', 98, 'disponible', 'amarante', false, null, null, 'au Pérou', '23 jours'),
  ('celosia-cristata-056', '056', 'Celosia cristata', 'Bouquet', 'en Thaïlande', '14 août 2025', 105, 'disponible', 'celosie', false, null, null, 'en Thaïlande', '20 jours'),
  ('achillea-millefolium-057', '057', 'Achillea millefolium', 'Bouquet', 'dans les Alpes', '20 juillet 2026', 66, 'disponible', 'achillee', false, null, null, 'dans les Alpes', '14 jours'),
  ('helianthus-annuus-058', '058', 'Helianthus annuus', 'Bouquet', 'dans le Gers', '28 août 2025', 80, 'disponible', 'tournesol', false, null, null, 'dans le Gers', '18 jours'),
  ('matricaria-chamomilla-059', '059', 'Matricaria chamomilla', 'Bouquet', 'en Anjou', '9 juin 2026', 62, 'disponible', 'camomille', false, null, null, 'en Anjou', '12 jours'),
  ('gossypium-herbaceum-060', '060', 'Gossypium herbaceum', 'Bouquet', 'en Grèce', '5 novembre 2025', 115, 'disponible', 'coton', false, null, null, 'en Grèce', '26 jours'),
  ('eryngium-planum-061', '061', 'Eryngium planum', 'Bouquet', 'en Écosse', '15 juillet 2026', 85, 'disponible', 'chardon', false, null, null, 'en Écosse', '17 jours'),
  ('banksia-menziesii-062', '062', 'Banksia menziesii', 'Bouquet', 'en Australie', '3 mai 2026', 160, 'disponible', 'banksia', false, 'Pièce rare', 'Ramenée d''un des fournisseurs les plus lointains de la collection.', 'en Australie', '29 jours')
on conflict (slug) do nothing;
