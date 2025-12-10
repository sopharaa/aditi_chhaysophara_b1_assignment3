import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../Api";
import MovieCard from "../Components/MovieCard";
import SearchBar from "../Components/SearchBar";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchMovies(query).then(setMovies);
  }, [query]);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />

      <div className="row">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
