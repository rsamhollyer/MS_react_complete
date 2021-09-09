import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const url = `https://swapi.dev/api/films`;
    const response = await fetch(url);
    const data = await response.json();

    const transformedMovies = data.results.map(movie => ({
      id: movie.episode_id,
      title: movie.title,
      openingText: movie.opening_crawl,
      releaseDate: movie.release_date,
    }));
    setMovies(transformedMovies);
    setIsLoading(false);
  };

  return (
    <>
      <section>
        <button type="button" onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>NO MOVIES FOUND</p>}
        {isLoading && <p>LOADING...</p>}
      </section>
    </>
  );
}

export default App;
