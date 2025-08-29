"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchNews, Article } from "@/api";
import Link from "next/link";
import { slugify } from "@/utils/utils";

// NYT categories (sections)
const categories = [
  "home",
  "Arts",
  "Automobiles",
  "Books",
  "Business",
  "Fashion",
  "Food",
  "Health",
  "Movies",
  "Politics",
  "Science",
  "Sports",
  "Technology",
];

export default function NewsSection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State for fetching articles
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Persist category and page selection from URL
  useEffect(() => {
    const categoryFromURL = searchParams.get("category") || "home";
    const pageFromURL = parseInt(searchParams.get("page") || "1", 10);
    setSelectedCategory(categoryFromURL);
    setCurrentPage(pageFromURL);
  }, [searchParams]);

  // Fetch news whenever category changes
  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      try {
        const data = await fetchNews(selectedCategory);
        setArticles(data);
      } catch {
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, [selectedCategory]);

  // Handle category button click
  const handleCategoryClick = (category: string) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("category", category);
    query.set("page", "1"); // Reset to page 1 when category changes
    router.push(`?${query.toString()}`);
  };

  // Handle pagination button click
  const handlePageChange = (page: number) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("page", page.toString());
    router.push(`?${query.toString()}`);
  };

  if (loading) return <p>Loading...</p>;
  if (!articles.length) return <p>No articles found.</p>;

  const articlesWithSlugs = articles.map((article) => ({
    ...article,
    slug: `${slugify(article.title)}`,
  }));

  const latest = articlesWithSlugs[0];
  const others = articlesWithSlugs.slice(1); // All articles except the first one

  // Pagination Logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = others.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(others.length / articlesPerPage);

  return (
    <>
      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`rounded-full px-5 py-2 transition-colors duration-300 ease-in-out ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Latest Article */}
      {latest && (
        <div className="p-7 lg:p-20 lg:py-20 lg:px-25 bg-primary--ice-cold-blue rounded-2xl mb-10 border-[1px] border-[var(--lighter-grey)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] card card-side">
            {latest.multimedia?.[0]?.url && (
              <img
                src={latest.multimedia[0].url}
                alt={latest.title}
                width={470}
                height={400}
                className="object-cover w-full h-full rounded-2xl"
                loading="lazy"
              />
            )}
            <div className="card-body flex items-start justify-center p-0">
              <div className="space-y-5">
                <div className="rounded-xl bg-primary text-center justify-center items-center flex w-fit max-w-max px-5 py-2">
                  <p className="text-white !text-xs">6 min read</p>
                </div>
                <h2 className="text-2xl font-bold mb-2">{latest.title}</h2>
                <p className="mb-3">{latest.abstract}</p>
                <div className="w-fit max-w-max">
                  <Link
                    href={`/post/${latest.slug}?category=${selectedCategory}`}
                    className="text-primary leading-none flex justify-start items-center gap-[.75rem]"
                  >
                    Read more
                    {/* Note: I'm replacing the Image component with an SVG for simplicity */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className="mb-10">News Posts</h2>

      {/* Other Articles (paginated) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentArticles.map((article) => (
          <Link
            href={`/post/${article.slug}?category=${selectedCategory}`}
            key={article.url}
            className="overflow-hidden card grid grid-rows-2 border-[1px] border-[var(--lighter-grey)] rounded-2xl transition-all duration-300 ease-in-out min-h-[30rem] hover:shadow-[-5px_5px_0px_0_var(--primary-color)]"
          >
            <div className="relative overflow-hidden h-full">
              {article.multimedia?.[0]?.url && (
                <img
                  width={300}
                  height={300}
                  src={article.multimedia[0].url}
                  alt={article.title}
                  className="absolute w-full h-full object-cover object-center rounded-tl-xl rounded-tr-xl"
                  loading="lazy"
                />
              )}
            </div>
            <div className="pt-10 px-7 pb-7 flex flex-col justify-between">
              <h3 className="font-bold">{article.title}</h3>
              <div className="w-fit max-w-max">
                <div className="text-primary leading-none flex justify-start items-center gap-[.75rem]">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-full px-5 py-2 bg-gray-200 text-black disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-full px-5 py-2 bg-gray-200 text-black disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
