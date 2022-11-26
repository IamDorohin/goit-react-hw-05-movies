import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../services/FetchAPI';
import {
  CastSection,
  CastList,
  CastItem,
  CastInfo,
} from 'components/MovieCard/Cast/Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(response => setCast(response.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <CastSection>
      <CastList>
        {cast.map(({ id, profile_path, original_name }) => (
          <CastItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              width="135"
              height="200"
              alt={original_name}
            />
            <CastInfo>{original_name}</CastInfo>
          </CastItem>
        ))}
      </CastList>
    </CastSection>
  );
};

export default Cast;
