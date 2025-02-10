import { Link } from "react-router-dom";
import { getImageURL } from "../services/tmdb";

const MovieCard = ({ movie }) => {
  console.log("movie-->", movie);
  return (
    <Link to={`/movie/${movie.id}`} className="group ">
      <article className="card transform transition-transform duration-200 group-hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img
            src={getImageURL(movie.poster_path)}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
          {movie}

          <div></div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
