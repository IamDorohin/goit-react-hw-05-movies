import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  background-color: #222b40;
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-left: 230px;
  padding-right: 40px;
`;

export const HeaderNav = styled.nav``;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 0;
`;

export const HeaderListItem = styled.li`
  border-right: 1px solid white;
  padding-left: 20px;
  padding-right: 20px;

  :first-child {
    border-left: 1px solid white;
  }
`;

export const HeaderListLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    color: #a1a6a6;
  }

  &.active {
    font-weight: bold;
    color: #08a1a3;
  }
`;
