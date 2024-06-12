import { Helmet } from 'react-helmet-async';
import { useFavoriteCharacters } from '@context/useFavoriteCharacters';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import {
  Container,
  StyledHeading,
  CharacterFavoritesGrid,
} from './FavoriteCharactersList.styles';

export const FavoriteCharactersList = () => {
  const { favorites } = useFavoriteCharacters();

  return (
    <>
      <Helmet>
        <title>FAVORITES</title>
      </Helmet>

      <Container>
        <StyledHeading>FAVORITES</StyledHeading>
        <CharacterFavoritesGrid>
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </CharacterFavoritesGrid>
      </Container>
    </>
  );
};
