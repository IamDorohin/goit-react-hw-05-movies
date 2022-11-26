import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchList from 'components/SearchList/SearchList';
import { MoviesPageContaier } from './Movies.styled';
import * as API from '../../services/FetchAPI';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchingMovies, setSearchingMovies] = useState(
    () => JSON.parse(window.localStorage.getItem('localStorageData')) ?? []
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryState = searchParams.get('search') ?? '';

  useEffect(() => {
    window.localStorage.setItem(
      'localStorageData',
      JSON.stringify(searchingMovies)
    );
  }, [searchingMovies]);

  useEffect(() => {
    if (searchQuery === '') return;
    API.getSearchingMovies(searchQuery)
      .then(data => setSearchingMovies(data.results))
      .catch(error => console.log(error));
  }, [searchQuery]);

  const changeSearch = query => {
    setSearchParams(query !== '' ? { search: query } : {});
  };

  const handleSearchQueryChange = query => {
    setSearchQuery(query);
  };

  return (
    <MoviesPageContaier>
      <SearchBar
        element={searchQueryState}
        onSubmit={handleSearchQueryChange}
        onChange={changeSearch}
      />
      <SearchList moviesArray={searchingMovies} />
    </MoviesPageContaier>
  );
};

export default Movies;
