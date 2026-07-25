# La Presse Fleurie

Site pour une marque de créations florales séchées, pièces uniques (1/1), vendues
100% en ligne. Projet Next.js (App Router).

## Démarrer

```bash
npm install
npm run dev
```

Sans configuration, le site tourne avec des données de démonstration
(`lib/data.js`) — aucun compte externe n'est nécessaire pour l'essayer en
local. Si `.env.local` contient une configuration Supabase valide, le site
utilise automatiquement les vraies tables `pieces` et `carnet` à la place.

## Ce qui est fait

- Toutes les pages : Accueil, Galerie, fiche d'œuvre, Sur-mesure, Notre Atelier,
  Le Journal, Compte / Mon herbier personnel, Panier, Commande
- Design system complet (couleurs, typographie, composants) porté depuis la maquette validée
- Carte spécimen avec bascule dessin ↔ photo, tampon "Vendue", certificat d'authenticité retournable
- **Connexion par lien magique réelle** (Supabase Auth + `proxy.js` pour rafraîchir la session)
- **Catalogue et carnet de collection branchés sur de vraies tables Supabase**
  (`pieces`, `carnet`) — voir `supabase/001_*.sql` et `supabase/002_*.sql` à exécuter
  une fois dans le SQL Editor de votre projet
- Formulaire de demande sur-mesure, écrit réellement en base
- Panier côté client (persisté en localStorage)

Tant que les migrations SQL n'ont pas été exécutées ou que `.env.local` est
vide, chaque page retombe silencieusement sur les données de démonstration —
rien ne casse, le site reste toujours consultable.

## Ce qui reste à faire

- **Le paiement (Stripe)**, volontairement laissé de côté pour l'instant. La page
  `/commande` affiche un récapitulatif complet et s'arrête juste avant le paiement.
  C'est aussi lui qui, une fois branché, devra écrire dans la table `carnet`
  après un achat réussi (pour l'instant cette table reste vide pour les vrais comptes).
- **Redirect URL Supabase** : dans Authentication > URL Configuration de votre
  projet Supabase, ajoutez `http://localhost:3000/**` (et votre futur domaine
  de production) aux "Redirect URLs", sinon le lien magique peut être refusé.
- **Resend** : pas encore branché, nécessite un compte pour l'envoi réel d'emails
  (confirmation de commande, notifications de liste d'attente).
- **Vraies photos** : chaque carte utilise une photo de démonstration libre de
  droits (`public/demo-photo.jpg`, Evie S. / Unsplash) en attendant un vrai
  shooting de chaque pièce.
- Le prénom de la fondatrice est laissé en `[Prénom]` à plusieurs endroits.

## Stack

Next.js 16 (App Router) + React 19, CSS classique (pas de framework CSS),
Server Actions pour les formulaires, Supabase (Postgres + Auth) pour les
données et la connexion, Resend en option pour les emails.

## Structure Supabase

- `demandes_sur_mesure` — chaque demande du formulaire sur-mesure
- `pieces` — le catalogue complet (disponibles et vendues), lisible publiquement
- `carnet` — quelle pièce appartient à quel client, lisible uniquement par son propriétaire
