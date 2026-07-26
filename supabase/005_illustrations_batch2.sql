-- Cinquième migration : branche les 16 nouvelles illustrations (style gravure
-- ukiyo-e / linogravure) sur les pièces correspondantes.
-- Dashboard Supabase > SQL Editor > coller > Run.

update pieces set illustration = '/flowers/pivoine.png' where slug = 'paeonia-officinalis-042';
update pieces set illustration = '/flowers/renoncule.png' where slug = 'ranunculus-asiaticus-038';
update pieces set illustration = '/flowers/eucalyptus.png' where slug = 'eucalyptus-cinerea-039';
update pieces set illustration = '/flowers/craspedia.png' where slug = 'craspedia-globosa-031';
update pieces set illustration = '/flowers/delphinium.png' where slug = 'delphinium-consolida-040';
update pieces set illustration = '/flowers/hydrangea.png' where slug = 'hydrangea-macrophylla-044';
update pieces set illustration = '/flowers/lavande.png' where slug = 'lavandula-angustifolia-045';
update pieces set illustration = '/flowers/gypsophile.png' where slug = 'gypsophila-paniculata-046';
update pieces set illustration = '/flowers/immortelle.png' where slug = 'helichrysum-italicum-047';
update pieces set illustration = '/flowers/statice.png' where slug = 'limonium-sinuatum-048';
update pieces set illustration = '/flowers/lagurus.png' where slug = 'lagurus-ovatus-050';
update pieces set illustration = '/flowers/protea.png' where slug = 'protea-cynaroides-051';
update pieces set illustration = '/flowers/anemone.png' where slug = 'anemone-coronaria-052';
update pieces set illustration = '/flowers/coquelicot.png' where slug = 'papaver-rhoeas-053';
update pieces set illustration = '/flowers/amarante.png' where slug = 'amaranthus-caudatus-055';
update pieces set illustration = '/flowers/achillee.png' where slug = 'achillea-millefolium-057';
