import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FavoriteCharactersProvider } from '../../context/CharactersContext';
import { CharacterInfoCard } from './CharacterInfoCard';

/**
 * @vitest-environment jsdom
 */
describe('CharacterInfoCard', () => {
  const character = {
    id: 1,
    name: 'Spider-Man',
    thumbnail: {
      path: 'https://example.com/spiderman',
      extension: 'jpg',
    },
    description: 'Friendly neighborhood superhero.',
  };

  it('renders character information correctly', () => {
    const { getByText } = render(
      <FavoriteCharactersProvider>
        <CharacterInfoCard character={character} />
      </FavoriteCharactersProvider>,
    );

    const nameElement = getByText('Spider-Man');
    const descriptionElement = getByText('Friendly neighborhood superhero.');

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('handles toggleFavorite correctly on button click', () => {
    const { getByRole } = render(
      <FavoriteCharactersProvider>
        <CharacterInfoCard character={character} />
      </FavoriteCharactersProvider>,
    );

    const favoriteButton = getByRole('button');
    fireEvent.click(favoriteButton);
  });
});
