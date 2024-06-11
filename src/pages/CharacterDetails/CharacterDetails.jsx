import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CharacterInfoCard } from '../../components/CharacterInfoCard/CharacterInfoCard';
import { getMarvelCharacterById } from '../../utils/marvelApi';

export const CharacterDetails = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const character = await getMarvelCharacterById(id);
        setCharacterData(character);
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
        </article>
      </main>
    </>
  );
};
