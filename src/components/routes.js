import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Gifs from "./Gifs";
import MVP from "./MVP/MVP";
import Footer from "./Footer";
import PageNotFound from "./404";
import Wiki from "./Wiki/Wiki";

function Root() {
  return (
    <main class="bg-white h-100 w-full max-w-[100vw]">
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
    errorElement: <PageNotFound title="404 | Monkeez Media" />,
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
      {
        path: "/wiki",
        element: <Wiki title={"WIKI"} />,
      },
    ],
  },
]);
