import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ComicCard } from './ComicCard';

/**
 * @vitest-environment jsdom
 */
describe('ComicCard', () => {
  const comicMock = {
    id: 1,
    title: 'Spider-Man',
    thumbnail: {
      path: 'https://example.com/spiderman',
      extension: 'jpg',
    },
    dates: [{ type: 'onsaleDate', date: '2023-01-01' }],
  };

  it('renders comic title correctly', () => {
    const { getByText } = render(<ComicCard comic={comicMock} />);
    expect(getByText('Spider-Man')).toBeInTheDocument();
  });

  it('renders release year correctly', () => {
    const { getByText } = render(<ComicCard comic={comicMock} />);
    expect(getByText('2023')).toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    const { getByAltText } = render(<ComicCard comic={comicMock} />);
    expect(getByAltText('Spider-Man')).toBeInTheDocument();
  });

  it('does not render release year if onsaleDate is missing', () => {
    const comicWithoutDate = { ...comicMock, dates: [] };
    const { queryByText } = render(<ComicCard comic={comicWithoutDate} />);
    expect(queryByText('2023')).not.toBeInTheDocument();
  });
});
