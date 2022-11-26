import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../../services/FetchAPI';

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
    <section>
      <ul>
        {cast.map(({ id, profile_path, original_name }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
