import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import { CharacterListGrid, Container } from './CharactersList.styles';
import { SearchBar } from '@components/SearchBar/SearchBar';
import { useFilteredCharacters } from '@hooks/useFilteredCharacters';
import { useCharactersContext } from '@context/useCharacters';
import { getMarvelCharacters } from '../../utils/marvelApi';

const CharactersList = ({ setIsLoading }) => {
  const { characters, setCharacters } = useCharactersContext();
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [offset, setOffset] = useState(0);
  const filteredCharacters = useFilteredCharacters(characters, searchValue);
  let isFetching = true;

  useEffect(() => {
    const fetchData = async () => {
      if (!isFetching) return;
      setIsLoading(true);
      try {
        const newCharacters = await getMarvelCharacters(100, offset);
        setCharacters((currentCharacters) => [
          ...currentCharacters,
          ...newCharacters,
        ]);
        if (newCharacters.length === 100) {
          setOffset((prevOffset) => prevOffset + 100);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isFetching = false;
    };
  }, [setCharacters, setIsLoading, offset]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log('FILTERED ', filteredCharacters.length);
  return (
    <>
      <Helmet>
        <title>Marvel Characters List</title>
      </Helmet>

      <Container>
        <SearchBar
          onSearch={handleSearchChange}
          totalCharacters={filteredCharacters.length}
        />
        <CharacterListGrid>
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </CharacterListGrid>
      </Container>
    </>
  );
};

CharactersList.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
};

export default CharactersList;
