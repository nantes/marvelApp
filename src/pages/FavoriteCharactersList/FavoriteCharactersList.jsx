import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFavoriteCharacters } from '@context/useFavoriteCharacters';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import { SearchBar } from '@components/SearchBar/SearchBar';
import { useFilteredCharacters } from "@hooks/useFilteredCharacters"

import {
  Container,
  StyledHeading,
  CharacterFavoritesGrid,
} from './FavoriteCharactersList.styles';

export const FavoriteCharactersList = () => {
  const { favorites } = useFavoriteCharacters();
  const [searchValue, setSearchValue] = useState('');

  const filteredCharacters = useFilteredCharacters(favorites, searchValue);

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
        ></SearchBar>
        <CharacterFavoritesGrid>
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </CharacterFavoritesGrid>
      </Container>
    </>
  );
};
