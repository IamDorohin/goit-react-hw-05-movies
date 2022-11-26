import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchFilmsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
  background-color: white;
`;

export const SearchFilmsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: calc(-1 * 16px);
  margin-left: calc(-1 * 16px);
`;
export const SearchFilmsItem = styled.li``;
export const SearchFilmsLink = styled(Link)`
  text-decoration: none;
`;

export const SearchFilmsCard = styled.div`
  margin-top: 32px;
  margin-left: 16px;
  flex-basis: calc(100% / 5 - 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;

  &:hover,
  &:focus {
    transition-property: transform;
    transform: scale(1.1);
    transition-duration: 500ms;
  }
`;

export const SearchFilmsDescription = styled.p`
  width: 298px;
  height: 50px;
  margin-top: 0;
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
