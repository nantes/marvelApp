import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { FavoriteCharactersProvider } from '../../context/CharactersContext';
import { Header } from './Header';

/**
 * @vitest-environment jsdom
 */
describe('Header', () => {
  it('renders Marvel logo and favorites count correctly', () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <FavoriteCharactersProvider>
          <Header isLoading={false} />
        </FavoriteCharactersProvider>
      </MemoryRouter>,
    );

    const marvelLogo = getByAltText('marvel-logo-home-link');
    expect(marvelLogo).toBeInTheDocument();

    const favoritesCount = getByText('0');
    expect(favoritesCount).toBeInTheDocument();
  });

  it('renders loading bar when isLoading is true', () => {
    const { queryByRole } = render(
      <MemoryRouter>
        <FavoriteCharactersProvider>
          <Header isLoading={true} />
        </FavoriteCharactersProvider>
      </MemoryRouter>,
    );

    const loadingBar = queryByRole('progressbar');

    expect(loadingBar).not.toBeNull();
    expect(loadingBar).toBeInTheDocument();
  });
});
