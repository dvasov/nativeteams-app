export type Article = {
  title: string;
  abstract: string;
  url: string;
  multimedia?: { url: string }[];
  byline: string;
  published_date: string;
  geo_facet: string[];
  created_date: string;
  id: string;
};

const categoryQueryMap: Record<string, string | undefined> = {
  All: undefined,
  Home: "home",
  Business: "business",
  Technology: "technology",
  Science: "science",
  Sports: "sports",
  Health: "health",
  Entertainment: "entertainment",
};

const API_URL = "https://api.nytimes.com/svc/topstories/v2/";
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export async function fetchNews(section: string): Promise<Article[]> {
  try {
    const res = await fetch(`${API_URL}/${section}.json?api-key=${API_KEY}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("No articles found.");
    }

    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Search News
export async function searchNews(query: string) {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(
      query
    )}&api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`
  );

  const data = await res.json();

  return (
    data.response?.docs?.map((doc: any) => ({
      id: doc._id, // unique identifier
      title: doc.headline.main,
      abstract: doc.abstract || doc.snippet,
      url: doc.web_url,
      published_date: doc.pub_date,
      multimedia: Array.isArray(doc.multimedia)
        ? doc.multimedia.map((m: any) => ({
            url: m.url ? `https://www.nytimes.com/${m.url}` : "",
            type: m.type,
          }))
        : [],
    })) || []
  );
}
