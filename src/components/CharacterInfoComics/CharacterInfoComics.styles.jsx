import styled from 'styled-components';
import * as media from '@theme/media-queries';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--spacing-48) var(--spacing-none) var(--spacing-24);
`;

export const Container = styled.div`
  width: 100%;

  ${media.gteMediumMedia} {
    max-width: 96rem;
  }
`;

export const StyledHeading = styled.p`
  text-transform: uppercase;

  ${media.smallMedia} {
    padding: var(--spacing-none) var(--spacing-48);
  }
  ${media.lteExtraSmallMedia} {
    padding: var(--spacing-none) var(--spacing-16);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: var(--spacing-16);
  overflow-x: auto;
  list-style: none;
  margin: var(--spacing-none);
  padding: var(--spacing-24) var(--spacing-none);

  ${media.smallMedia} {
    & > :first-child {
      margin-left: var(--spacing-48);
    }
    & > :last-child {
      margin-right: var(--spacing-48);
    }
  }
  ${media.lteExtraSmallMedia} {
    & > :first-child {
      margin-left: var(--spacing-16);
    }
    & > :last-child {
      margin-right: var(--spacing-16);
    }
  }
`;
