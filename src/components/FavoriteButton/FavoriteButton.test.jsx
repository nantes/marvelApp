import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FavoriteButton } from './FavoriteButton';

/**
 * @vitest-environment jsdom
 */
describe('FavoriteButton', () => {
  it('renders OK', () => {
    const { getByRole } = render(<FavoriteButton />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<FavoriteButton onClick={handleClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('prevents default action on click', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<FavoriteButton onClick={handleClick} />);
    const button = getByRole('button');

    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    fireEvent(button, event);

    expect(event.defaultPrevented).toBe(true);
  });
});
