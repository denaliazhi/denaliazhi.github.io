import App from "./App";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Dabbles from "./pages/Dabbles";
import About from "./pages/About";
import NotFound from "./pages/Not-Found";
import GroceryApp from "./pages/Project-Grocery-App";
import HaikuHunt from "./pages/Project-Haiku-Hunt";
import Orbitl from "./pages/Project-Orbitl";
import OdinProject from "./pages/The-Odin-Project";
import Orbitl2 from "./pages/Project-Orbitl-2";
import AmenuveveWebsite from "./pages/Project-Amenuveve-Website";
import AmenuveveCatalogue from "./pages/Project-Amenuveve-Catalogue";
import AdiffGraphics from "./pages/Project-Adiff";
import AirbnbReport from "./pages/Project-Airbnb";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/design",
        element: <Design />,
      },
      {
        path: "/dabbles",
        element: <Dabbles />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/esl-grocery-shop",
        element: <GroceryApp />,
      },
      {
        path: "/haiku-hunt",
        element: <HaikuHunt />,
      },
      {
        path: "/orbitl",
        element: <Orbitl />,
      },
      {
        path: "/orbitl-website",
        element: <Orbitl2 />,
      },
      {
        path: "/amenuveve-website",
        element: <AmenuveveWebsite />,
      },
      {
        path: "/adiff-graphics",
        element: <AdiffGraphics />,
      },
      {
        path: "/airbnb-report",
        element: <AirbnbReport />,
      },
      {
        path: "/amenuveve-catalogue",
        element: <AmenuveveCatalogue />,
      },
      {
        path: "/the-odin-project",
        element: <OdinProject />,
      },
    ],
  },
];

export default routes;
