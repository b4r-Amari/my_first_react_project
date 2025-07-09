import { useState, useEffect } from "react";
import './App.css'; 
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_UR = 'http://www.omdbapi.com?apikey=d15c6d4b';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_UR}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);
  

  return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {   
            movies?.length > 0 ? (
                <div className="container"> 
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )  
        }
    </div>
  );
}

export default App;