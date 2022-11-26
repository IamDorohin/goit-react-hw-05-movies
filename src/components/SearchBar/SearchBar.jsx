import { useState } from 'react';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from 'components/SearchBar/SearchBar.styled';

const SearchBar = ({ element, onSubmit, onChange }) => {
  const [searchQuery, setSearchQuery] = useState(element ?? '');

  const handleSearchQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
    onChange(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter your search request');
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          autocomplete="off"
          autoFocus
          placeholder="Search your favourite films"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;
