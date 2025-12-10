import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails, TMDB_IMAGE_BASE } from "../Api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const poster = movie.poster_path
    ? `${TMDB_IMAGE_BASE}${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={poster} className="img-fluid rounded" alt={movie.title} />
      </div>

      <div className="col-md-8">
        <h2>{movie.title}</h2>
        <p className="text-warning">⭐ {movie.vote_average}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>

        <h5>Genres:</h5>
        <p>
          {movie.genres?.map(g => (
            <span key={g.id} className="badge bg-secondary me-2">{g.name}</span>
          ))}
        </p>

        <h5>Overview</h5>
        <p>{movie.overview}</p>

        <Link to="/" className="btn btn-dark mt-3">Back</Link>
      </div>
    </div>
  );
}
