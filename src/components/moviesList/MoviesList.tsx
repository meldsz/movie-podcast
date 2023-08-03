import styled from "@emotion/styled";
import MovieCard from "../movieCard/MovieCard";
import { useState } from 'react'
import { useModal } from "../../hooks/useModal/useModal";
import MovieModal from "../movieDetails/MovieModal";
import { Movie } from "../../types/movies";

const MoviesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const MoviesList = ({ movies }: { movies: Movie[] }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedMovie, setSelectedMovie] = useState({ imdbID: '', review: '' })
  const showMovieDetails = (movie: any) => {
    setSelectedMovie(movie)
    openModal()
  }
  return (
    <>
      <MoviesGrid data-testid="moviesList">
        {movies.map((movie) => (
          <MovieCard key={movie?.imdbID} movie={movie} showMovieDetails={showMovieDetails} />
        ))}
      </MoviesGrid>
      <MovieModal handleClose={closeModal} open={isModalOpen} imdbID={selectedMovie?.imdbID} review={selectedMovie?.review} />
    </>
  )
};

export default MoviesList;
