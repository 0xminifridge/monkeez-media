import React, { useEffect, useState } from "react";
import WikiCard from "./WikiCard";
import { Defintions } from "./Definitions";
import { DISCORD_LINK } from "../../constants/Socials";
import { Link } from "react-router-dom";

export default function Wiki({ title }) {
  useEffect(() => {
    document.title = `${title} | Monkeez Media`;
    window.scroll(0, 0);
  }, [title]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDefinitions, setFilteredDefinitions] = useState(Defintions);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Filter the definitions based on the search term
    const filtered = Defintions.filter(
      (definition) =>
        definition.term.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
        definition.definition
          .toLowerCase()
          .includes(newSearchTerm.toLowerCase())
    );

    setFilteredDefinitions(filtered);
  };

  return (
    <div class="h-full min-h-[100vh] bg-primary">
      <div class="w-full h-full p-4">
        <div class="py-4 grid grid-cols-1 gap-4 w-full max-w-[700px] mx-auto">
          <div className="mx-auto text-center">
            <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-custom">
              Monkeez Wiki
            </h1>
            <p>An exploration into our world through lore and more</p>
          </div>
          <input
            type="text"
            placeholder="Search the wiki"
            value={searchTerm}
            onChange={handleSearch}
            class="bg-white rounded-xl border-4 border-solid border-black box-shadow-custom p-4 w-full max-w-[700px] mx-auto focus:outline-none"
          />
          {filteredDefinitions
            .sort((a, b) => {
              // Convert both terms to lowercase to ensure a case-insensitive sort
              const termA = a.term.toLowerCase();
              const termB = b.term.toLowerCase();

              if (termA < termB) {
                return -1;
              } else if (termA > termB) {
                return 1;
              } else {
                return 0;
              }
            })
            .map((item, index) => {
              return <WikiCard key={index} item={item} />;
            })}
          <Link
            class="font-bold px-4 py-2 box-shadow-custom bg-mnkz-tan rounded-lg text-black md:text-2xl hover:text-white text-center border-2 border-black border-solid"
            to={DISCORD_LINK}
            target="_blank"
          >
            Submit a defintion
          </Link>
        </div>
      </div>
    </div>
  );
}
