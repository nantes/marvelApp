import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { getMarvelCharacters } from '../../utils/marvelApi';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import { CharacterListGrid, Container } from './CharactersList.styles';
import { SearchBar } from '@components/SearchBar/SearchBar';
import { useFilteredCharacters } from '@hooks/useFilteredCharacters';

export const CharactersList = ({ setIsLoading }) => {
  const [charactersData, setCharactersData] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let cachedCharacters = localStorage.getItem('marvelCharacters'); // Intenta obtener los datos del caché local

        if (cachedCharacters) {
          setCharactersData(JSON.parse(cachedCharacters));
        } else {
          const characters = await getMarvelCharacters();
          setCharactersData(characters);
          localStorage.setItem('marvelCharacters', JSON.stringify(characters)); // Guarda los datos en el caché local
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  const filteredCharacters = useFilteredCharacters(charactersData, searchValue);

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
        ></SearchBar>
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
