import {
  Header,
  HeaderList,
  HeaderListItem,
  // HeaderListLink,
} from './Header.styled';
import { Link } from 'react-router-dom';

export const HeaderContainer = () => {
  return (
    <Header>
      <HeaderList>
        <HeaderListItem>
          <Link to="/">Home</Link>
        </HeaderListItem>
        <HeaderListItem>
          <Link to="movies">Movies</Link>
        </HeaderListItem>
      </HeaderList>
    </Header>
  );
};
