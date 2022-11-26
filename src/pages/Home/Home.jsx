import { useState, useEffect } from 'react';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import * as API from '../../services/FetchAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    window.localStorage.removeItem('localStorageData');
  }, []);

  return (
    <main>
      <TrendingMovies moviesArray={trendingMovies} />;
    </main>
  );
};

export default Home;
