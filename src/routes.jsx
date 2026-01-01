import App from "./App";
import Home from "./pages/Home";
import Design from "./pages/Design";
import About from "./pages/About";
import NotFound from "./pages/Not-Found";
import GroceryApp from "./pages/Project-Grocery-App";
import HaikuHunt from "./pages/Project-Haiku-Hunt";
import Orbitl from "./pages/Project-Orbitl";
import OdinProject from "./pages/The-Odin-Project";

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
        path: "/About",
        element: <About />,
      },
      {
        path: "/Design",
        element: <Design />,
      },
      {
        path: "/ESL-Grocery-Shop",
        element: <GroceryApp />,
      },
      {
        path: "/Haiku-Hunt",
        element: <HaikuHunt />,
      },
      {
        path: "/Orbitl",
        element: <Orbitl />,
      },
      {
        path: "/The-Odin-Project",
        element: <OdinProject />,
      },
    ],
  },
];

export default routes;
