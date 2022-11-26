import {
  SearchFilmsContainer,
  SearchFilmsList,
  SearchFilmsItem,
  SearchFilmsLink,
  SearchFilmsCard,
  SearchFilmsDescription,
} from 'components/SearchList/SearchList.styled';
import { useLocation } from 'react-router-dom';

const SearchList = ({ moviesArray }) => {
  const location = useLocation();

  return (
    <SearchFilmsContainer>
      <SearchFilmsList>
        {moviesArray.map(({ id, title, poster_path }) => (
          <SearchFilmsItem key={id}>
            <SearchFilmsLink to={`${id}`} state={{ from: location }}>
              <SearchFilmsCard>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  width="300"
                  height="470"
                  alt={title}
                />
                <SearchFilmsDescription> {title}</SearchFilmsDescription>
              </SearchFilmsCard>
            </SearchFilmsLink>
          </SearchFilmsItem>
        ))}
      </SearchFilmsList>
    </SearchFilmsContainer>
  );
};

export default SearchList;
