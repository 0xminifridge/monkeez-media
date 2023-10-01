import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GIF_FORM_URL, GIPHY_URL } from "../constants/ExternalLinks";

export default function Gifs({ title }) {
  const gifs = [
    "https://media.giphy.com/media/kVqRmt5jCmplWH26df/giphy.gif",
    "https://media.giphy.com/media/GTAkNh6kx6OxCMOX1D/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTI0M2t2Y3RycTZ5MTdhYmR6Mzg5MHh2ZHF6NHVzNmh1NnJ4azMwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lVt17AI3NDSpdLmzUh/giphy.gif",
    "https://media.giphy.com/media/rnXOItFaYcoKS7a5P8/giphy.gif",
    "https://media.giphy.com/media/TL7OGS0Pqtr5gq3C2l/giphy.gif",
    "https://media.giphy.com/media/jkMWFEguC8GvMQgAUs/giphy.gif",
  ];

  useEffect(() => {
    document.title = `${title} | Monkeez Media`;
  }, []);
  return (
    <div class="h-full bg-primary">
      <div class="w-full h-full p-4">
        <div className="relative h-[50vh] rounded-xl border-black border-solid border-4 overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-gif.png`}
            alt="Background"
            className="w-full h-full object-cover block"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center bg-primary border-black border-4 border-solid mx-auto w-[85%] md:w-[60%] p-4 rounded-xl">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 text-shadow-custom">
                Monkeez Gifs
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-black">
                Our tribe is taking over the gif world and we need help from
                talented creators like you to make it happen! Help share your
                ideas below by pressing the button
              </p>
            </div>
          </div> */}
        </div>
        <div class="p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="text-white text-center  mx-auto w-[85%] md:w-[60%]">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 text-shadow-custom-sm md:text-shadow-custom">
                Tribe Takeover
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-black pb-4">
                Our tribe is taking over the gif world and we need help from
                talented creators like you to make it happen! Help share your
                ideas below by pressing the button
              </p>
              <Link
                class="px-4 py-2 box-shadow-custom bg-mnkz-tan rounded text-black md:text-2xl hover:text-white"
                to={GIF_FORM_URL}
                target="_blank"
              >
                Submit Gif Idea
              </Link>
            </div>
            <div class="grid grid-cols-3 grid-flow-row gap-2 py-4">
              {gifs.map((item, index) => {
                return (
                  <Link
                    class="border-solid border-black border-4 rounded-xl hover:cursor-pointer hover:border-mnkz-tan overflow-hidden"
                    key={index}
                    to={item}
                    target="_blank"
                  >
                    <img
                      src={item}
                      class="w-full max-w-[200px] aspect-square block object-cover"
                      alt="Gif"
                    />
                  </Link>
                );
              })}
            </div>
            <div>
              <Link
                class="px-4 py-2 box-shadow-custom bg-mnkz-tan rounded text-black md:text-2xl hover:text-white"
                to={GIPHY_URL}
                target="_blank"
              >
                See More Gifs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
