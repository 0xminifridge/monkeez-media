import { Link } from "react-router-dom";
import { MEDIA_FORM_URL } from "../constants/ExternalLinks";

export default function Navbar() {
  const navLinks = [
    { name: "CHAMPS", path: "mvps" },
    { name: "GIFS", path: "gifs" },
    { name: "SUBMISSION", path: MEDIA_FORM_URL, target: "_blank" },
  ];

  return (
    <nav class=" bg-primary z-[1000] sticky top-0">
      <div class="w-full flex flex-wrap items-center justify-between px-4">
        <Link
          to={"/"}
          class="flex items-center hover:opacity-80 hover:text-white"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/logos/primary-logo.png`}
            class="w-20 aspect-square block"
            alt="Monkeez Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-center">
            Monkeez Media
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          class="hidden w-full md:block md:w-auto text-black font-bold"
          id="navbar-solid-bg"
        >
          <ul class="text-black font-bold flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    class="block py-2 pl-3 pr-4 text-black font-bold md:p-0 hover:underline underline-offset-2"
                    aria-current="page"
                    target={item?.target}
                  >
                    {item?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
