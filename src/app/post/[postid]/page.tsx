import { fetchNews } from "@/api";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/utils";
import Author from "@/components/Author/Author";

interface PostPageProps {
  params: { postid: string };
  searchParams: { category?: string };
}

export default async function PostPage({
  params,
  searchParams,
}: PostPageProps) {
  const category = searchParams.category || "home";
  const articles = await fetchNews(category);

  // Find matching article by slug+index
  const article = articles.find((a) => {
    const slug = `${slugify(a.title)}`;
    return slug === params.postid;
  });

  if (!article) {
    notFound();
  }

  const publishDate: Date = new Date(article.published_date);

  const date = publishDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="section-padding--y">
      {/* Breadcrumbs */}
      <Breadcrumbs category={category} articleTitle={article.title} />

      <div className="py-15">
        <div className="flex flex-col items-center justify-center mb-15">
          <h1 className="text-center text-5xl max-w-[40ch] text-pretty mb-5">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <p>{date}</p>
            <p>|</p>
            <p>6 min read</p>
          </div>
        </div>
        {/* Article content */}
        {article.multimedia?.[0]?.url && (
          <img
            width={1000}
            height={1000}
            src={article.multimedia[0].url}
            alt={article.title}
            className="w-full h-auto mb-6"
          />
        )}
      </div>
      <div className="space-y-15">
        <h2 className="mb-6 text-2xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <p className="text-lg text-gray-700 mb-6">{article.abstract}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          corrupti animi eveniet qui, illum dicta harum itaque a, magni minus,
          explicabo nulla. Commodi, eligendi sint.
        </p>
      </div>
      <div className="section-padding--t mt-20">
        <Author />
      </div>
    </div>
  );
}
