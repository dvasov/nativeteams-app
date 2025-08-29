export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 50);
}

export function createSlug(article: { title: string }, index: number) {
  // Combines index + slugified title for uniqueness
  return `${index}-${slugify(article.title)}`;
}
