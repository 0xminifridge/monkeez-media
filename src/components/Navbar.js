import { Link } from "react-router-dom";
import { MEDIA_FORM_URL } from "../constants/ExternalLinks";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navLinks = [
    { name: "CHAMPS", path: "mvps" },
    { name: "WIKI", path: "wiki" },
    { name: "GIFS", path: "gifs" },
    { name: "UPLOAD", path: MEDIA_FORM_URL, target: "_blank" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Event listener to track scrolling
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      class={`${
        isScrolled ? "bg-primary/80" : "bg-primary"
      }  z-[1000] sticky top-0 w-full`}
    >
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
          // class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          class="box-shadow-custom ml-2 inline-flex items-center p-2 text-sm text-black rounded-lg md:hidden hover:border-white hover:text-white border-solid border-black border-2"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
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
          class={`${
            isOpen ? "" : "hidden"
          } w-full md:block md:w-auto text-black font-bold`}
          id="navbar-solid-bg"
        >
          <ul class="text-black font-bold flex flex-col mt-4 rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent duration-500">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    class="block  text-black font-bold py-2 hover:underline underline-offset-2"
                    aria-current="page"
                    target={item?.target}
                    onClick={() => setIsOpen(false)}
                  >
                    {item?.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to={"https://www.monkeez.io"}
                class="block  text-white bg-gray-900 p-2 rounded-xl font-bold hover:bg-mnkz-tan hover:text-black underline-offset-2"
                aria-current="page"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                Main Site
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
