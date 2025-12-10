import { Routes, Route, Link } from "react-router-dom";
import MovieList from "./Pages/MovieList";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">MovieDB</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
