import React, { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageNotFound(props) {
  const error = useRouteError();
  console.error(error);
  useEffect(() => {
    document.title = props.title;
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div class="bg-primary w-full px-16 md:px-0 h-screen flex items-center justify-center">
        <div class="bg-white border-black border-solid border-4 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg text-center box-shadow-custom">
          <p class="text-primary text-shadow-custom text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider">
            404
          </p>
          <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-black mt-4">
            Page Not Found
          </p>
          <p class="text-black mt-4 pb-4 border-b-2 border-black text-center">
            Sorry, the page you are looking for could not be found.
          </p>
          <a
            href="/"
            class="box-shadow-custom border-2 border-black border-solidflex items-center space-x-2 bg-mnkz-tan hover:bg-black text-black hover:text-white px-4 py-2 mt-6 rounded duration-150 transition"
            title="Return Home"
          >
            <span>Return Home</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
