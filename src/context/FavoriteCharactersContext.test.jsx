import { useContext, useEffect } from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  FavoriteCharactersProvider,
  FavoriteCharactersContext,
} from './CharactersContext';

/**
 * @vitest-environment jsdom
 */
describe('FavoriteCharactersContext', () => {
  it('provides favorites and favorite management functions', () => {
    const TestComponent = () => {
      const {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
      } = useContext(FavoriteCharactersContext);

      const character = { id: 1, name: 'Spider-Man' };

      useEffect(() => {
        act(() => {
          addFavorite(character);
        });
      }, [addFavorite]);

      const handleRemoveFavorite = () => {
        act(() => {
          removeFavorite(character.id);
        });
      };

      const handleToggleFavorite = () => {
        act(() => {
          toggleFavorite(character);
        });
      };

      return (
        <div>
          <button onClick={handleRemoveFavorite} data-testid='removeFavorite'>
            Remove Favorite
          </button>
          <button onClick={handleToggleFavorite} data-testid='toggleFavorite'>
            Toggle Favorite
          </button>
          <p data-testid='favorites'>{JSON.stringify(favorites)}</p>
          <p data-testid='isFavorite'>{isFavorite(character.id).toString()}</p>
        </div>
      );
    };

    const { getByTestId, getByText } = render(
      <FavoriteCharactersProvider>
        <TestComponent />
      </FavoriteCharactersProvider>,
    );

    expect(getByTestId('favorites').textContent).toBe(
      '[{"id":1,"name":"Spider-Man"}]',
    );
    expect(getByTestId('isFavorite').textContent).toBe('true');

    fireEvent.click(getByText('Remove Favorite'));

    expect(getByTestId('favorites').textContent).toBe('[]');
    expect(getByTestId('isFavorite').textContent).toBe('false');

    fireEvent.click(getByText('Toggle Favorite'));
  });
});
