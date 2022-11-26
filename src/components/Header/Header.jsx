import {
  Header,
  HeaderNav,
  HeaderList,
  HeaderListItem,
  HeaderListLink,
} from './Header.styled';

export const HeaderContainer = () => {
  return (
    <Header>
      <HeaderNav>
        <HeaderList>
          <HeaderListItem>
            <HeaderListLink to="/">Home</HeaderListLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderListLink to="movies">Movies</HeaderListLink>
          </HeaderListItem>
        </HeaderList>
      </HeaderNav>
    </Header>
  );
};
