"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex w-full rounded-full bg-primary--light-grey">
        <input
          type="text"
          placeholder="Search"
          className="w-full border-none px-8 rounded-tl-full rounded-bl-full py-3 bg-primary--light-grey focus-visible:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="h-full btn bg-primary rounded-full border-none px-[3rem] py-3 text-white shadow-none"
        >
          Search
        </button>
      </div>
    </form>
  );
}
