import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchBar } from './SearchBar';

/**
 * @vitest-environment jsdom
 */
describe('SearchBar', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    expect(getByPlaceholderText('SEARCH A CHARACTER')).toBeInTheDocument();
  });

  it('calls onSearch when input value changes', () => {
    const handleSearch = vi.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleSearch} />,
    );
    const input = getByPlaceholderText('SEARCH A CHARACTER');

    fireEvent.change(input, { target: { value: 'Spider-Man' } });
    expect(handleSearch).toHaveBeenCalledWith('Spider-Man');
  });

  it('displays totalCharacters when it is a number', () => {
    const { getByText } = render(
      <SearchBar onSearch={() => {}} totalCharacters={42} />,
    );
    expect(getByText('42 RESULTS')).toBeInTheDocument();
  });

  it('does not display totalCharacters when it is not a number', () => {
    const { queryByText } = render(
      <SearchBar onSearch={() => {}} totalCharacters={null} />,
    );
    expect(queryByText('RESULTS')).not.toBeInTheDocument();
  });
});
