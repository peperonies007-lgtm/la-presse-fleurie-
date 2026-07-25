import { notFound } from "next/navigation";
import Link from "next/link";
import { journalArticles, getArticleBySlug } from "@/lib/data";

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: `${article.titre} — Le Journal`, description: article.extrait };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <section className="journal">
      <div className="container">
        <div className="article-body">
          <span className="eyebrow">Le Journal</span>
          <h1>{article.titre}</h1>
          <p>{article.contenu}</p>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/le-journal" style={{ textDecoration: "underline" }}>
              ← Tous les articles
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
