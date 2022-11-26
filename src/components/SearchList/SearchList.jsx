import {
  SearchFilmsContainer,
  SearchFilmsList,
  SearchFilmsItem,
  SearchFilmsLink,
} from 'components/SearchList/SearchList.styled';
import { useLocation } from 'react-router-dom';

const SearchList = ({ moviesArray }) => {
  const location = useLocation();

  return (
    <SearchFilmsContainer>
      <SearchFilmsList>
        {moviesArray.map(({ id, title }) => (
          <SearchFilmsItem key={id}>
            <SearchFilmsLink to={`${id}`} state={{ from: location }}>
              {title}
            </SearchFilmsLink>
          </SearchFilmsItem>
        ))}
      </SearchFilmsList>
    </SearchFilmsContainer>
  );
};

export default SearchList;
