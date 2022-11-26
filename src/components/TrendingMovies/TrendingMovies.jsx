import {
  TrendingsTitle,
  TrendingsList,
  TrendingsListItem,
  TrendingsListLink,
} from 'components/TrendingMovies/TrendingMovies.styled';
import { useLocation } from 'react-router-dom';

const TrendingMovies = ({ moviesArray }) => {
  const location = useLocation();

  return (
    <>
      <TrendingsTitle />
      <TrendingsList>
        {moviesArray.map(({ id, title }) => (
          <TrendingsListItem key={id}>
            <TrendingsListLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </TrendingsListLink>
          </TrendingsListItem>
        ))}
      </TrendingsList>
    </>
  );
};

export default TrendingMovies;
