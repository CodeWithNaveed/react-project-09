import { useEffect } from 'react';
import styled from 'styled-components';

const MoviesFetchData = ({ searchTerm, movies, setMovies, setSimilarity }) => {
  
  // Fetch movies from TMDB API based on searchTerm
  const fetchMovies = async (query) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d1b83dd054786999cdeab1df570feb46&query=${query}`);
    const data = await res.json();
    if (data.results) {
      setMovies(data.results); // Use 'results' for TMDB API response
    } else {
      setMovies([]); // Set empty if no movies are found
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchMovies(searchTerm);
    }
  }, [searchTerm]);

  // Handler for setting similarity
  const handleSimilarityClick = (id) => {
    setSimilarity(id); // Update similarity with the movie's ID
  };

  return (
    <Container>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Movie_card key={movie.id} onClick={() => handleSimilarityClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} width="100px" height="100px" />
            <Movie_info>
              <h3>{movie.title}</h3>
              <p>📆 {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
            </Movie_info>
          </Movie_card>
        ))
      ) : (
        <Loading>LOADING ...</Loading>
      )}
    </Container>
  );
};

export default MoviesFetchData;

// Styled Components
const Container = styled.div` 
  width: 30%;
  background-color: #2b3035;
  border-radius: 0.9rem;
  position: relative;
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
  padding: 20px;
  gap: 18px;
  border-bottom: 1px solid #e7ede730;
  cursor: pointer;
`;

const Movie_info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #c7c7c7;
`;

const Loading = styled.p`
  margin: 58px;
  font-size: 24px;
  color: #c7c7c7;
  font-weight: 600;
`;
