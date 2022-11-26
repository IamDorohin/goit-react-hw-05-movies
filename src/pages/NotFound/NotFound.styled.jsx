import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 145px;
  padding-top: 200px;
`;
export const NotFoundTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center;
`;
export const NotFoundDescription = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: 17px;
`;
export const NotFoundDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NotFoundLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #222b40;
  color: white;
  :not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: #a1a6a6;
  }
`;
