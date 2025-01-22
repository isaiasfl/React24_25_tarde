import { createContext, useContext, useState } from "react";

// creación del contexto
const PokemonContext = createContext();

// creación del proveedor del contexto
export function PokemonProvider({ children }) {
  // hook
  const [favorites, setFavorites] = useState([])

  const addToFavorites =(pokemon) => {
  }
  const removeFromFavorites = (pokemonId) => {};

  return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
  );
}

// me creo un Hook personalizado para cargar el contexto
export const usePokemon = () => {
  // para usar el contexto hacia:
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error(
      "usePokemon debe estar dentro del proveedor PokemonProvider"
    );
  }
  return context;
};
