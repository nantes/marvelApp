import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getMarvelCharacters } from '../../utils/marvelApi';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import { CharacterListGrid, Container } from './CharactersList.styles';

export const CharactersList = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await getMarvelCharacters();
        setCharactersData(characters);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Marvel Characters List</title>
      </Helmet>

      <Container>
        <CharacterListGrid>
          {charactersData.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </CharacterListGrid>
      </Container>
    </>
  );
};
