import { useEffect } from "react";
import { MediumData } from "../constants/MediumData";
import { Link } from "react-router-dom";

export default function Home({ title }) {
  useEffect(() => {
    document.title = `${title} | Monkeez Media`;
  }, []);
  return (
    <div class="flex flex-col bg-gradient-to-b from-primary via-mnkz-wobo to-mnkz-api">
      <div className="relative w-screen h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[92vh] border-b-4 border-solid border-black">
        <img
          src={`${process.env.PUBLIC_URL}/images/home-hero.png`}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center bg-primary border-black border-4 border-solid mx-auto w-[60%] p-4 rounded-xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-shadow-custom">
            Monkeez Media
          </h1>
        </div>
      </div> */}
      </div>
      <div class="bg-gradient-to-b from-mnkz-wobo to-primary">
        <div class="md:w-[70%] mx-auto p-4 flex flex-col justify-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UOObJmYdFn0?si=mKJxkxWDiQfYSq2_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="w-full aspect-video"
          ></iframe>
        </div>
        <div class=" p-4 h-full min-h-[70vh]">
          <div class="text-center py-4">
            <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-custom">
              Latest Publications
            </h1>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            {MediumData.map((item, index) => {
              return (
                <Link
                  class="bg-white p-4 border-solid border-black border-4 rounded-xl"
                  to={item?.url}
                  target="_blank"
                >
                  <div class="overflow-hidden rounded-xl bg-primary">
                    <img
                      src={`${item?.image}/${index}.png`}
                      class="block object-cover w-full max-w-[1000px] aspect-video"
                      alt={item?.name}
                    />
                  </div>
                  <div class="flex flex-col justify-start pt-2">
                    <h3 class="text-lg lg:text-xl xl:text-2xl font-bold">
                      {item?.name}
                    </h3>
                    <p class="text-gray-500">{item?.date}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* <div class="flex flex-col justify-center text-center">
          <div class="text-white">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 text-shadow-custom-sm md:text-shadow-custom">
              Creating Together
            </h1>
          </div>
          <div>
            <p>Monkeez are stronger in numbers! </p>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
