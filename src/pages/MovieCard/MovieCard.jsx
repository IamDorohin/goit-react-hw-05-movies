import {
  MovieContainer,
  MovieBackToListLink,
  MovieExtraInfoList,
  MovieExtraInfoLink,
} from './MovieCard.styled';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getCurrentMovie } from '../../services/FetchAPI';
import MovieInfo from '../../components/MovieCard/MovieInfo/MovieInfo';

const MovieCard = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCurrentMovie(movieId)
      .then(response => setCurrentMovie(response))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!currentMovie) return;

  const data = location.state?.from ?? '/';

  return (
    <MovieContainer>
      <MovieBackToListLink to={data}>Back to search list</MovieBackToListLink>
      <MovieInfo currentMovieInfo={currentMovie} />
      <p>Additional information</p>
      <MovieExtraInfoList>
        <MovieExtraInfoLink to="cast">Cast</MovieExtraInfoLink>
        <MovieExtraInfoLink to="reviews">Reviews</MovieExtraInfoLink>
      </MovieExtraInfoList>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MovieContainer>
  );
};

export default MovieCard;
