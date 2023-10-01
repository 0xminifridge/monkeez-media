import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Gifs from "./Gifs";
import MVP from "./MVP/MVP";
import Footer from "./Footer";

function Root() {
  return (
    <main class="bg-white h-100">
      {/* {window.location.pathname !== "/" && <Navbar />} */}
      <div class="mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      {/* {window.location.pathname !== "/" && <Footer />} */}
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home title={"HOME"} />,
      },
      {
        path: "/gifs",
        element: <Gifs title={"GIFS"} />,
      },
      {
        path: "/mvps",
        element: <MVP title={"CHAMPS"} />,
      },
    ],
  },
]);
