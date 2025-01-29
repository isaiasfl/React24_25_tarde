import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

// creación del contexto
const PokemonContext = createContext();

// creación del proveedor del contexto
export function PokemonProvider({ children }) {
  // hook
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {
    // verificamos si el pokemon ya está en favoritos
    if (favorites.some((poke) => poke.id === pokemon.id)) {
      // lanzamos error con sonner
      toast.error("El pokemon ya está en favoritos", {
        style: {
          background: "red",
          color: "white",
          border: "2px solid red",
        },
      });
      return;
    }
    // si no está repetido lo agregamos
    setFavorites((preFavoritos) => [...preFavoritos, pokemon]);
    // sonner de todo ok
    toast.success(`Pokemon ${pokemon.name} añadido a favoritos`, {
      style: {
        background: "#d1fae5",
        color: "black",
        border: "2px solid green",
      },
      icon: "⭐",
    });
  };
  const removeFromFavorites = (pokemonId) => {
    setFavorites((preFavorites) =>
      preFavorites.filter((p) => p?.id !== pokemonId)
    );
    // sonner de pokemon borrado de favoritos
    toast.success("Pokemon eliminado de los favoritos", {
      style: {
        background: "#d1fae5",
        color: "black",
        border: "2px solid green",
      },
      icon: "🗑️",
    });
    //favorites.filter(p=> p.id !== pokemonId)
  };

  return (
    <PokemonContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </PokemonContext.Provider>
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
