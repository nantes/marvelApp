/* eslint-disable react/prop-types */
import {
  StyledHeader,
  Image,
  Resume,
  Container,
  Wrapper,
} from './CharacterInfoCard.styles';

export const CharacterInfoCard = ({ character }) => {
  return (
    <StyledHeader>
      <Container>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />

        <Resume>
          <Wrapper>
            <p>{character.name}</p>
          </Wrapper>
          <p>{character.description}</p>
        </Resume>
      </Container>
    </StyledHeader>
  );
};
