// context/ArticlesContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Article } from "@/api";

interface ArticlesContextType {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(
  undefined
);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles must be used within ArticlesProvider");
  }
  return context;
};
