"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchNews, Article } from "@/api";
import Link from "next/link";
import { slugify } from "@/utils/utils";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchResults() {
      setLoading(true);
      try {
        const data = await searchNews(query);
        setArticles(data);
      } catch (err) {
        console.error(err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  if (!query) return <p>Please enter a search term.</p>;
  if (loading) return <p>Loading...</p>;
  if (!articles.length) return <p>No results for "{query}"</p>;

  const articlesWithSlugs = articles.map((article, index) => ({
    ...article,
    slug: `${slugify(article.title)}-${index}`,
  }));

  const others = articlesWithSlugs.slice();

  return (
    <div>
      <h2 className="mb-5">Search results for: "{query}"</h2>

      {others.map((article, index) => (
        <div key={article.slug} className="mb-5 border p-3 rounded">
          <h3 className="font-bold">{article.title}</h3>
          <p>{article.abstract}</p>
          <Link href={`/post/${slugify(article.title)}-${index}`}>
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
