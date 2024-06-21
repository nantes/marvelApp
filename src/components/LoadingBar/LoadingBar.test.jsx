import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingBar from './LoadingBar';

/**
 * @vitest-environment jsdom
 */
describe('LoadingBarComponent', () => {
  it('renders loading bar when loading is true', () => {
    const { container } = render(<LoadingBar loading={true} />);
    const loadingBarContainer = container.firstChild;
    expect(loadingBarContainer).toBeInTheDocument();

    const loadingBar = loadingBarContainer.firstChild;
    expect(loadingBar).toBeInTheDocument();
  });

  it('does not render loading bar when loading is false', () => {
    const { container } = render(<LoadingBar loading={false} />);
    expect(container.firstChild).toBeNull();
  });
});
