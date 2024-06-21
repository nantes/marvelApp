import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFavoriteCharacters } from '@context/useCharacters';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import { SearchBar } from '@components/SearchBar/SearchBar';
import { useFilteredCharacters } from '@hooks/useFilteredCharacters';

import {
  Container,
  StyledHeading,
  CharacterFavoritesGrid,
} from './FavoriteCharactersList.styles';

const FavoriteCharactersList = () => {
  const { favorites, removeFavorite } = useFavoriteCharacters();
  const [searchValue, setSearchValue] = useState('');

  const filteredCharacters = useFilteredCharacters(favorites, searchValue);

  const handleRemoveFavorite = (characterId) => {
    removeFavorite(characterId);
  };

  return (
    <>
      <Helmet>
        <title>FAVORITES</title>
      </Helmet>

      <Container>
        <StyledHeading>FAVORITES</StyledHeading>
        <SearchBar
          onSearch={setSearchValue}
          totalCharacters={filteredCharacters.length}
        />
        <CharacterFavoritesGrid>
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onRemoveFavorite={() => handleRemoveFavorite(character.id)}
            />
          ))}
        </CharacterFavoritesGrid>
      </Container>
    </>
  );
};

export default FavoriteCharactersList;
