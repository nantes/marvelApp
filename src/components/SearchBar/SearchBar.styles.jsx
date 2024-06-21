import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  padding-bottom: 24px;
`;

export const StyledResultsCount = styled.p`
  text-transform: uppercase;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: var(--spacing-8);
  border-bottom: 0.1rem solid var(--colors-black);
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-left: var(--spacing-12);
  color: var(--colors-black);

  &::placeholder {
    text-transform: uppercase;
    color: var(--colors-dark-gray);
  }
`;
