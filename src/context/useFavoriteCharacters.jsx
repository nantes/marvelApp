import { useContext } from 'react';
import { FavoriteCharactersContext } from './FavoriteCharactersContext';

export const useFavoriteCharacters = () => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error(
      'useFavoriteCharacters hook must be used within a FavoriteCharactersProvider. Make sure your component is wrapped with the provider.',
    );
  }

  return context;
};
