import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] py-5 items-center justify-between relative z-[9999]">
      <div className="flex items-center justify-start">
        <Link href="/">
          <Image
            className="w-fit h-fit"
            src="/logos/nativeteams-logo.svg"
            alt="logo"
            width={200}
            height={200}
            loading="lazy"
          />
        </Link>
      </div>
      <nav className="items-center justify-center hidden lg:flex">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[unset] text-primary--dark-grey border-none shadow-none"
          >
            Links Group 1
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-unset rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[unset] text-primary--dark-grey border-none shadow-none"
          >
            Links Group 1
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-unset rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex items-center justify-end">
        <button className="hidden lg:flex btn bg-primary rounded-full border-none px-4 py-3">
          Get Started
        </button>
        <button className="btn btn-square btn-ghost flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
