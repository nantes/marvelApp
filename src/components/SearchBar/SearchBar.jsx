/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Container,
  StyledResultsCount,
  InputWrapper,
  StyledInput,
} from './SearchBar.styles';
import SearchIcon from '@components/Icons/SearchIcon';

export const SearchBar = ({ onSearch, totalCharacters }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <StyledInput
          type='search'
          placeholder='SEARCH A CHARACTER'
          aria-label='SEARCH A CHARACTER'
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputWrapper>
      {typeof totalCharacters === 'number' && (
        <StyledResultsCount>{`${totalCharacters} RESULTS`}</StyledResultsCount>
      )}
    </Container>
  );
};
