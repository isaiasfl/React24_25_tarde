import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
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
        path: ROUTES.POKEMON_DETAIL,  //search/:name
        element: <PokemonDetail />,
        // Loader es una característica de react-router-dom nueva
        // que permite cargar datos antes de renderizar el componente
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${params.name}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch pokemons");
            }
            return await response.json();
          } catch (error) {}
        },
        errorElement: <ErrorPage />,
      },
    ],
  },
  {},
]);
