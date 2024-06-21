import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFilteredCharacters } from './useFilteredCharacters';

/**
 * @vitest-environment jsdom
 */
describe('useFilteredCharacters', () => {
  const charactersData = [
    { id: 1, name: 'Spider-Man' },
    { id: 2, name: 'Iron Man' },
    { id: 3, name: 'Captain America' },
    { id: 4, name: 'Hulk' },
    { id: 5, name: 'Black Widow' },
  ];

  it('filters characters based on searchValue', () => {
    const { result, rerender } = renderHook(
      ({ charactersData, searchValue }) =>
        useFilteredCharacters(charactersData, searchValue),
      { initialProps: { charactersData, searchValue: 'man' } },
    );

    expect(result.current).toHaveLength(2);
    expect(result.current.map((char) => char.name)).toEqual([
      'Spider-Man',
      'Iron Man',
    ]);

    rerender({ charactersData, searchValue: 'captain' });

    expect(result.current).toHaveLength(1);
    expect(result.current[0].name).toBe('Captain America');
  });

  it('limits the number of filtered characters to maxResults', () => {
    const { result, rerender } = renderHook(
      ({ charactersData, searchValue, maxResults }) =>
        useFilteredCharacters(charactersData, searchValue, maxResults),
      { initialProps: { charactersData, searchValue: '', maxResults: 3 } },
    );

    expect(result.current).toHaveLength(3);

    rerender({ charactersData, searchValue: '', maxResults: 2 });

    expect(result.current).toHaveLength(2);
  });

  it('returns all characters if searchValue is empty', () => {
    const { result } = renderHook(() =>
      useFilteredCharacters(charactersData, ''),
    );

    expect(result.current).toHaveLength(5);
    expect(result.current.map((char) => char.name)).toEqual([
      'Spider-Man',
      'Iron Man',
      'Captain America',
      'Hulk',
      'Black Widow',
    ]);
  });
});
