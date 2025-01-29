import React from "react";
import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { ROUTES } from "../routes/paths";

const Favorites = () => {
  const { favorites, removeFromFavorites } = usePokemon();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Favoritos</h1>
        <p>
          No tienes pokemons favoritos, ve a la sección de pokemons y añade
          algunos
        </p>
        <Link
          to={ROUTES.HOME}
          className="text-blue-500 hover:underline block mt-4"
        >
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6"> Tus Pokemons Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* aquí renderizmos tarjetas con los pokemon favoritos */}
        {favorites.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white rounded-xl p-6  shadow-sm hover:shadow-lg"
          >
            {/* imagen */}
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="w-32 h-32 mx-auto"
            />
            <h2 className="text-xl capitalize font-semibold text-center mt-4">
              {pokemon.name}
            </h2>
            <div className="mt-4 space-y-2">
              <Link
                to={`${ROUTES.SEARCH}/${pokemon.name}`}
                className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-900 mt-4"
              >
                Ver detalles
              </Link>
              <button
                className="w-full bg-amber-500 text-white px-4 py-2 rounded hover:bg-slate-900"
                onClick={() => removeFromFavorites(pokemon.id)}
              >
                Eliminar de Favoritos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
