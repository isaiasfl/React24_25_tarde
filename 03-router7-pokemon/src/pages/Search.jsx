import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // empiezo a buscar el pokemon
    setIsLoading(true);
    try {
      // feching a la api de pokemon
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      if (!response.ok) {
        toast.error("Error al buscar el pokemon", {
          style: {
            background: "#fee2e2",
            color: "white",
            border: "2px solid red",
          },
          icon: "❌",
        });
        return;
      }
      console.log(await response.json());
      // pinto una tarjeta con los detalles del pokemon
      // o redirijo a la página de detalles del pokemon
      navigate(`/search/${search.toLowerCase()}`);
    } catch (error) {
      toast.error("Error al buscar el pokemon", {
        style: {
          background: "#fee2e2",
          color: "white",
          border: "2px solid red",
        },
        icon: "❌",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemon a Buscar:</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={search}
            placeholder="Buscar Pokemon"
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2  border-gray-200 border rounded-lg  focus:outline-rose-500 "
          />
          <button
            type="submit"
            className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-slate-900"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
