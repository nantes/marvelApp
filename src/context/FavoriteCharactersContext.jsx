/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const FavoriteCharactersContext = createContext(undefined);

export const FavoriteCharactersProvider = ({ children, ...props }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) =>
    setFavorites((prev) => [...prev, character]);
  const removeFavorite = (id) =>
    setFavorites((prev) => prev.filter((favorite) => favorite.id !== id));
  const toggleFavorite = (character) =>
    isFavorite(character.id)
      ? removeFavorite(character.id)
      : addFavorite(character);
  const isFavorite = (id) => favorites.some((favorite) => favorite.id === id);

  return (
    <FavoriteCharactersContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
      }}
      {...props}
    >
      {children}
    </FavoriteCharactersContext.Provider>
  );
};
