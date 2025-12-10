const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_BASE = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

async function fetchTMDB(path, params = {}) {
  const url = new URL(`${TMDB_BASE}${path}`);
  url.searchParams.set("api_key", TMDB_API_KEY);

  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url);
  return res.json();
}

export function fetchPopularMovies() {
  return fetchTMDB("/movie/popular", { language: "en-US" }).then(data => data.results);
}

export function searchMovies(query) {
  if (!query) return fetchPopularMovies();
  return fetchTMDB("/search/movie", { query }).then(data => data.results);
}

export function fetchMovieDetails(id) {
  return fetchTMDB(`/movie/${id}`, { language: "en-US" });
}
