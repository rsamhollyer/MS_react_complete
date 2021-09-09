import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler = () => {
    const url = `https://swapi.dev/api/films`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const transformedMovies = data.results.map(movie => ({
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        }));
        setMovies(transformedMovies);
      })
      .catch();
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
