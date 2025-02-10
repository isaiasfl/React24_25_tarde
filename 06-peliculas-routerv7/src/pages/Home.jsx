import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );

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
    <div className="space-y-8">
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
        <h2 className="text-2xl font-bold text-sky-900">Películas populares</h2>
        {loading ? (
          <div>Cargando ... Aquií pondré el spinner</div>
        ) : (
          <>
            {/* Grid para las películas */}
            <div className="grid grid-cols-2 gap-6  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data?.results?.map((movie) => (
                // Aquí pinto las tarjetas
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
