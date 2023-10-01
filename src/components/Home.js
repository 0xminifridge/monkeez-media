import { useEffect } from "react";

export default function Home({ title }) {
  useEffect(() => {
    document.title = `${title} | Monkeez Media`;
  }, []);
  return (
    <div className="relative w-screen h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[92vh]">
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
  );
}
