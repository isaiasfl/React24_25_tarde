import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Search from "../pages/Search";
import { ROUTES } from "./paths";
export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SEARCH,
        element: <Search />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <Favorites />,
      },
      {
        path: ROUTES.POKEMON_DETAIL,
        element: <PokemonDetail />,
      },
    ],
  },
  {},
]);
