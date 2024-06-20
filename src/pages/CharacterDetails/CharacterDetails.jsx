import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CharacterInfoCard } from '@components/CharacterInfoCard/CharacterInfoCard';
import { CharacterInfoComics } from '@components/CharacterInfoComics/CharacterInfoComics';
import {
  getMarvelCharacterById,
  getComicsByCharacterId,
} from '../../utils/marvelApi';

export const CharacterDetails = ({ setIsLoading }) => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [comicsData, setComicsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const character = await getMarvelCharacterById(id);
        const comics = await getComicsByCharacterId(id);
        setCharacterData(character);
        setComicsData(comics);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, setIsLoading]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!characterData || !Object.keys(characterData).length) {
    return null;
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

CharacterDetails.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
};
