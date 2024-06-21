import { useContext, useEffect } from 'react';
import { render, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  MarvelCharactersProvider,
  MarvelCharactersContext,
} from './CharactersContext';

/**
 * @vitest-environment jsdom
 */
describe('MarvelCharactersContext', () => {
  it('provides characters and setCharacters', () => {
    const TestComponent = () => {
      const { characters, setCharacters } = useContext(MarvelCharactersContext);

      useEffect(() => {
        act(() => {
          setCharacters([{ id: 1, name: 'Spider-Man' }]);
        });
      }, [setCharacters]);

      return (
        <div>
          <p data-testid='characters'>{JSON.stringify(characters)}</p>
        </div>
      );
    };

    const { getByTestId } = render(
      <MarvelCharactersProvider>
        <TestComponent />
      </MarvelCharactersProvider>,
    );

    expect(getByTestId('characters').textContent).toBe(
      '[{"id":1,"name":"Spider-Man"}]',
    );
  });
});
