import { MovieContainer } from './MovieCard.styled';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
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
      <Link to={data}>Back to search list</Link>

      <MovieInfo currentMovieInfo={currentMovie} />
      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MovieContainer>
  );
};

export default MovieCard;
