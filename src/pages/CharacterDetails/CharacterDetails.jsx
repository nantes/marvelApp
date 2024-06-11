import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CharacterInfoCard } from '@components/CharacterInfoCard/CharacterInfoCard';
import { CharacterInfoComics } from '../../components/CharacterInfoComics/CharacterInfoComics';
import {
  getMarvelCharacterById,
  getComicsByCharacterId,
} from '../../utils/marvelApi';

export const CharacterDetails = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [comicsData, setComicsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const character = await getMarvelCharacterById(id);
        const comics = await getComicsByCharacterId(id);
        setCharacterData(character);
        setComicsData(comics);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Helmet>
        <title>{characterData?.name}</title>
      </Helmet>

      <main>
        <article>
          <CharacterInfoCard character={characterData} />
          {comicsData.length && <CharacterInfoComics comics={comicsData} />}
        </article>
      </main>
    </>
  );
};
