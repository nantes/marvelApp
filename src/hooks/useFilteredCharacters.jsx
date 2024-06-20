import { useEffect, useState } from 'react';

export const useFilteredCharacters = (
  charactersData,
  searchValue,
  maxResults = 50,
) => {
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const filtered = charactersData.filter((character) =>
      searchValue
        ? character.name.toLowerCase().includes(searchValue.toLowerCase())
        : true,
    );
    setFilteredCharacters(filtered.slice(0, maxResults));
  }, [charactersData, searchValue, maxResults]);

  return filteredCharacters;
};
