import Link from "next/link";
import { MiscIcon } from "@/components/MiscIcons";
import { journalArticles } from "@/lib/data";

export const metadata = {
  title: "Le Journal — La Presse Fleurie",
  description: "Le procédé, l'entretien, les histoires derrière chaque récolte de fleurs séchées.",
};

export default function JournalPage() {
  return (
    <section className="journal">
      <div className="container">
        <div className="page-hero" style={{ padding: "0 0 2rem" }}>
          <span className="eyebrow">Le Journal</span>
          <h1>Le procédé, l&apos;entretien, les histoires</h1>
        </div>
        <div className="journal-grid">
          {journalArticles.map((article, i) => (
            <Link href={`/le-journal/${article.slug}`} className="journal-card" key={article.slug}>
              <div
                className="journal-icon"
                style={{ "--jc": ["var(--terracotta)", "var(--sage)", "var(--ochre)"][i % 3] }}
              >
                <MiscIcon name={article.icon} />
              </div>
              <h3>{article.titre}</h3>
              <p>{article.extrait}</p>
              <span className="read-link">Lire l&apos;article</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
