import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding-left: 230px;
  padding-top: 20px;
  padding-right: 40px;
  background-color: white;
`;

export const MovieBackToListLink = styled(Link)`
  text-decoration: none;
`;

export const MovieExtraInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

export const MovieExtraInfoLink = styled(Link)`
  :first-child {
    margin-bottom: 10px;
  }
`;
