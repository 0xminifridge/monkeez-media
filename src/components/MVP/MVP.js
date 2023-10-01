import React, { useEffect } from "react";
import MVPCard from "./MVPCard";

export default function MVP({ title }) {
  const items = [
    { name: "Glenn", monkeeId: 71, twitter: "crypto_glennl" },
    {
      name: "Justin The Photographer",
      monkeeId: 992,
      twitter: "JustnThePhotog",
    },
    { name: "BedStuyBoi", monkeeId: 940, twitter: "BedStuy_Boi" },
    { name: "Hidalgo", monkeeId: 839, twitter: "jonnyalgo" },
  ];

  useEffect(() => {
    document.title = `${title} | Monkeez Media`;
  }, []);
  return (
    <div class="h-full bg-primary">
      <div class="w-full h-full">
        <div className="relative w-screen h-[50vh]">
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-image.png`}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center bg-primary border-black border-4 border-solid mx-auto w-[85%] md:w-[60%] p-4 rounded-xl">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 text-shadow-custom">
                Community Champions
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-black">
                Every month, the tribe nominates Monkeez they choose to
                highlight. These champions are models of the community and serve
                as inspiration and example to others as we grow our brand
                together. Check them out below!
              </p>
            </div>
          </div>
        </div>
        {/* <div class="relative">
          <div class=" absolute z-10 left-0 right-0 top-0 bottom-0 mx-auto flex flex-col self-center justify-center items-center ">
            <div class="bg-primary px-4 py-2 rounded-xl border-black border-solid border-4 mx-4">
              <div class="m-2 p-2 border-white border-solid border-2 flex flex-col justify-center text-center rounded-xl">
                <span class="lg:text-6xl font-bold text-white text-shadow-custom my-2">
                  Community Champions
                </span>
                <span class="w-full max-w-screen-lg mx-auto">
                  Every month, the tribe nominates Monkeez they choose to
                  highlight. These champions are models of the community and
                  serve as inspiration and example to others as we grow our
                  brand together. Check them out below!
                </span>
              </div>
            </div>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-image.png`}
            alt="Trees"
          />
        </div> */}
        <div class="p-4">
          <div class="order-0 grid auto-cols-max auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-6 gap-8">
            {items.map((item, index) => {
              return <MVPCard item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
