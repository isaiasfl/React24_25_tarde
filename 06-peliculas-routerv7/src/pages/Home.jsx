import React, { useState } from "react";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import MovieCard from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );
  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage((prevPage) => prevPage + newPage);
  };

  // si se produce un error qué hago
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar las películas {error}
        </p>
        <Link to="/" className="text-blue-500">
          Volver al inicio
        </Link>
      </div>
    );
  }

  // si no ... pues cargo las películas
  return (
    <div className="space-y-10 mx-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido al VideoClub DWEC
        </h1>
        <p className="mt-4 text-gray-800">
          Aquí podrás encontrar las películas más populares del momento
        </p>
      </header>
      {/* sección de las películas */}
      <section>
        <h2 className="text-2xl font-bold text-sky-900 mb-8">
          Películas populares
        </h2>
        {loading ? (
          <PacmanLoader color="#15387b" />
        ) : (
          <>
            {/* Grid para las películas */}
            <div className="grid  grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {data?.results?.map((movie) => (
                // Aquí pinto las tarjetas
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            {/* botones para moverme entre páginas */}
            <div className="flex justify-center mt-8 gap-2 mb-10">
              <button
                className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                onClick={() => handlePageChange(1)}
                disabled={page === 1}
              >
                Anterior
              </button>
              <span className="text-gray-800 flex items-center">
                Página {data?.page} de {data?.total_pages}
              </span>
              <button
                className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === data?.total_pages}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
