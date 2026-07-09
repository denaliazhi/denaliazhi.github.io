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
import AmenuveveWebsite from "./pages/Project-Amenuveve-Website";
import AmenuveveCatalogue from "./pages/Project-Amenuveve-Catalogue";
import AdiffGraphics from "./pages/Project-Adiff";
import AirbnbReport from "./pages/Project-Airbnb";
import FunnWebsite from "./pages/Project-Funn-Website";
import LumiBags from "./pages/Project-Lumi-Bags";
import LumiTrifold from "./pages/Project-Lumi-Trifold";
import TD from "./pages/Project-TD";
import AB from "./pages/Project-AB";
import ISC from "./pages/Project-ISC";
import PNC from "./pages/Project-PNC";
import USAA from "./pages/Project-USAA";

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
        path: "/amenuveve-website",
        element: <AmenuveveWebsite />,
      },
      {
        path: "/funn-website",
        element: <FunnWebsite />,
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
      {
        path: "/lumi-bags",
        element: <LumiBags />,
      },
      {
        path: "/lumi-trifold",
        element: <LumiTrifold />,
      },
      {
        path: "/td-bank",
        element: <TD />,
      },
      {
        path: "/associated-bank",
        element: <AB />,
      },
      {
        path: "/island-service-company",
        element: <ISC />,
      },
      {
        path: "/pnc-bank",
        element: <PNC />,
      },
      {
        path: "/usaa",
        element: <USAA />,
      },
    ],
  },
];

export default routes;
