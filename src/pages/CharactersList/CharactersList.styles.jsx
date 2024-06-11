import styled from 'styled-components';
import * as media from '@theme/media-queries';

export const CharacterListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.9rem, 1fr));
  gap: var(--spacing-16);

  margin: var(--spacing-none);
  padding: var(--spacing-none);
  list-style: none;

  ${media.lteSmallMedia} {
    grid-template-columns: repeat(auto-fill, minmax(17.2rem, 1fr));
  }
`;

export const Container = styled.main`
  position: relative;
  padding: var(--spacing-48);
  padding-top: var(--spacing-60);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
    padding-top: var(--spacing-36);
  }
`;
