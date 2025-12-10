import { TMDB_IMAGE_BASE } from "../Api";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const poster = movie.poster_path
    ? `${TMDB_IMAGE_BASE}${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="col-md-3 mb-4">
      <Link to={`/movie/${movie.id}`} className="text-decoration-none text-dark">
        <div className="card shadow-sm">
          <img src={poster} className="card-img-top" alt={movie.title} />

          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="small mb-1">Release: {movie.release_date}</p>
            <p className="small text-warning">⭐ {movie.vote_average}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
