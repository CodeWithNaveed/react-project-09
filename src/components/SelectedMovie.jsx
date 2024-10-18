import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HalfRating from './HalfRating';
import FavouritList from './FavouritList';

const SelectedMovie = ({ movies, similarity, moviesList, setMoviesList, loader, setLoader }) => {
  const [delayedMovie, setDelayedMovie] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectedMovie = movies.find((movie) => movie.id === similarity); // Use 'id' for TMDB
      setDelayedMovie(selectedMovie);
      setLoader(false);
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, [movies, similarity, setLoader]);

  return (
    <Container>
      {delayedMovie ? (
        <>
          <Movie_card key={delayedMovie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${delayedMovie.poster_path}`} alt={delayedMovie.title} width="200px" height="200px" />
            <Movie_info>
              <h3>{delayedMovie.title}</h3>
              <p>📆 {delayedMovie.release_date ? delayedMovie.release_date : 'N/A'}</p>
              <p>🎬 Genre: {delayedMovie.genre_ids ? delayedMovie.genre_ids.join(', ') : 'N/A'}</p>
              <p>🧑‍💼 Director: Not available in TMDB basic response</p>
              <p>📝 Plot: {delayedMovie.overview.split('. ')[0] || 'Plot not available'}</p>
            </Movie_info>
          </Movie_card>

          <HalfRating movies={movies} similarity={similarity} setMoviesList={setMoviesList} />
        </>
      ) : (
        loader ? <img src="https://i.gifer.com/WMDx.gif" alt="loading" /> : <p>No movie selected</p>
      )}

      <FavouritList moviesList={moviesList} />
    </Container>
  );
};

export default SelectedMovie;

// Styled Components
const Container = styled.div`
  width: 40%;
  background-color: #2b3035;
  border-radius: 0.9rem;
  gap: 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6741d9;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #2b3035;
  }
`;

const Movie_card = styled.div`
  display: flex;
  border-bottom: 1px solid #e7ede730;
  cursor: pointer;
  background-color: #293234;
  gap: 18px;
  width: 100%;
`;

const Movie_info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  color: #c7c7c7;
  gap: 10px;
`;
