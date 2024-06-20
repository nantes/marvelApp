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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const charactersData = await getMarvelCharacters();
        setCharacters(charactersData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setCharacters, setIsLoading]);

  const filteredCharacters = useFilteredCharacters(characters, searchValue);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Marvel Characters List</title>
      </Helmet>

      <Container>
        <SearchBar
          onSearch={setSearchValue}
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
