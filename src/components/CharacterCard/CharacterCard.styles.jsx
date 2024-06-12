import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  height: 19rem;
  object-fit: cover;
`;

export const Divider = styled.hr`
  height: 0.5rem;
  margin: var(--spacing-none);
  border: var(--spacing-none);
  background-color: var(--colors-marvel-red);
`;

export const CharacterName = styled.p`
  color: var(--colors-white);
  z-index: 1;
`;

export const CharacterInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-12);
  flex: 1;
  position: relative;
  background-color: var(--colors-black);

  box-sizing: border-box;
  padding: var(--spacing-16) var(--spacing-16) var(--spacing-24)
    var(--spacing-16);

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    background-color: var(--colors-white);

    width: 1.2rem;
    height: 1.2rem;
    right: -0.6rem;
    bottom: -0.6rem;
    transform: rotate(45deg);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-decoration: none;
`;
