import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMarvelCharacters } from '../utils/marvelApi';

export const MarvelCharactersContext = createContext();
export const FavoriteCharactersContext = createContext();

export const MarvelCharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <MarvelCharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </MarvelCharactersContext.Provider>
  );
};

export const FavoriteCharactersProvider = ({ children }) => {
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
    >
      {children}
    </FavoriteCharactersContext.Provider>
  );
};

MarvelCharactersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

FavoriteCharactersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
