import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
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
  };

  return (
    <>
      <section>
        <button type="button" onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
