import {
  TrendingsContainer,
  TrendingsTitle,
  TrendingsList,
  TrendingsListItem,
  TrendingsListLink,
  TrendingsListCard,
  TrendingsListDescription,
} from 'components/TrendingMovies/TrendingMovies.styled';
import { useLocation } from 'react-router-dom';

const TrendingMovies = ({ moviesArray }) => {
  const location = useLocation();

  return (
    <TrendingsContainer>
      <TrendingsTitle />
      <TrendingsList>
        {moviesArray.map(({ id, title, poster_path }) => (
          <TrendingsListItem key={id}>
            <TrendingsListLink to={`movies/${id}`} state={{ from: location }}>
              <TrendingsListCard>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  width="300"
                  height="470"
                  alt={title}
                />
                <TrendingsListDescription> {title}</TrendingsListDescription>
              </TrendingsListCard>
            </TrendingsListLink>
          </TrendingsListItem>
        ))}
      </TrendingsList>
    </TrendingsContainer>
  );
};

export default TrendingMovies;
