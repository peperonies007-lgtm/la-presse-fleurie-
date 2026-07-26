import { getPieces } from "@/lib/pieces";
import { journalArticles } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const revalidate = 30;

export default async function sitemap() {
  const pieces = await getPieces();

  const staticRoutes = [
    { url: "", changeFrequency: "weekly", priority: 1 },
    { url: "/galerie", changeFrequency: "daily", priority: 0.9 },
    { url: "/sur-mesure", changeFrequency: "monthly", priority: 0.7 },
    { url: "/notre-atelier", changeFrequency: "monthly", priority: 0.6 },
    { url: "/le-journal", changeFrequency: "weekly", priority: 0.7 },
  ].map((r) => ({
    url: `${SITE_URL}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const pieceRoutes = pieces.map((p) => ({
    url: `${SITE_URL}/galerie/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articleRoutes = journalArticles.map((a) => ({
    url: `${SITE_URL}/le-journal/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...pieceRoutes, ...articleRoutes];
}
