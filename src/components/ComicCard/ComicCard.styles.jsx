import styled from 'styled-components';
import * as media from '@theme/media-queries';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 17.9rem;
  ${media.smallMedia} {
    width: 16.9rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 16.4rem;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 26.9rem;

  ${media.smallMedia} {
    height: 25.3rem;
  }
  ${media.lteExtraSmallMedia} {
    height: 24.8rem;
  }
`;

export const ComicTitle = styled.p`
  font-weight: 500;

  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-8);
`;
