import './App.css'
import { useState } from "react";
import MoviesFatchData from './components/MoviesFatchData'
import Searchbar from './components/Searchbar'
import SelectedMovie from './components/SelectedMovie'

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Default search term
  const [movies, setMovies] = useState([]); // Initialize state to store the movies array
  const [similarity, setSimilarity] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [loader, setLoader] = useState(false);

  


  return (
    <div>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={movies} />
      <div className="movies-section">
        <MoviesFatchData searchTerm={searchTerm} movies={movies} setMovies={setMovies} setSimilarity={setSimilarity}/>
        <SelectedMovie movies={movies} similarity={similarity}  moviesList={moviesList} setMoviesList={setMoviesList} loader={loader} setLoader={setLoader}/>
      </div>
    </div>
  )
}

export default App