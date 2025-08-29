import Link from "next/link";
import Image from "next/image";

interface BreadcrumbsProps {
  category: string;
  articleTitle?: string;
}

export default function Breadcrumbs({
  category,
  articleTitle,
}: BreadcrumbsProps) {
  return (
    <nav className="text-sm mb-4 flex items-center gap-[1.2rem]">
      <Link
        href="/"
        className="transition-colors duration-300 ease hover:text-[var(--color-primary)] capitalize"
      >
        News
      </Link>
      <div>
        <Image
          src="/globals/arrow-right--dark.svg"
          alt="arrow-right"
          width={9}
          height={9}
        />
      </div>
      <Link
        href={`/?category=${category}`}
        className="transition-colors duration-300 ease hover:text-[var(--color-primary)] capitalize"
      >
        {category}
      </Link>
      <div>
        <Image
          src="/globals/arrow-right--dark.svg"
          alt="arrow-right"
          width={9}
          height={9}
        />
      </div>
      {articleTitle && (
        <>
          <Link
            href={`/?category=${category}`}
            className="pointer-events-none text-primary capitalize"
          >
            {articleTitle}
          </Link>
        </>
      )}
    </nav>
  );
}
