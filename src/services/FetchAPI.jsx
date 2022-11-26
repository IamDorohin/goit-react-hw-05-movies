import axios from 'axios';

const KEY = '7ba21bb3252839f5a4394129f3887778';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING = 'trending/movie/day';
const SEARCHING = 'search/movie';
const CURRENT = 'movie';

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/${TRENDING}?api_key=${KEY}`);

  return response.data;
};

export const getSearchingMovies = async searchQuery => {
  const response = await axios.get(
    `${BASE_URL}/${SEARCHING}?api_key=${KEY}&query=${searchQuery}`
  );
  return response.data;
};

export const getCurrentMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/${CURRENT}/${movieId}?api_key=${KEY}`
  );

  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/${CURRENT}/${movieId}/credits?api_key=${KEY}`
  );

  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/${CURRENT}/${movieId}/reviews?api_key=${KEY}`
  );

  return response.data;
};
