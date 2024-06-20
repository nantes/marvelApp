import { useContext } from 'react';
import {
  FavoriteCharactersContext,
  MarvelCharactersContext,
} from './CharactersContext';

export const useFavoriteCharacters = () => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error(
      'useFavoriteCharacters hook must be used within a FavoriteCharactersProvider. Make sure your component is wrapped with the provider.',
    );
  }

  return context;
};

export const useCharactersContext = () => {
  const context = useContext(MarvelCharactersContext);

  if (!context) {
    throw new Error(
      'useCharactersContext hook must be used within a MarvelCharacterProvider. Make sure your component is wrapped with the provider.',
    );
  }

  return context;
};
