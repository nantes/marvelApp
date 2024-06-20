import {
  StyledHeader,
  Image,
  Resume,
  Container,
  Wrapper,
} from './CharacterInfoCard.styles';
import PropTypes from 'prop-types';
import { useFavoriteCharacters } from '@context/useFavoriteCharacters';
import HeartFilledIcon from '@components/Icons/HeartFilledIcon';
import HeartOutlinedIcon from '@components/Icons/HeartOutlinedIcon';
import { FavoriteButton } from '@components/FavoriteButton/FavoriteButton';

export const CharacterInfoCard = ({ character }) => {
  const { toggleFavorite, isFavorite } = useFavoriteCharacters();

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
            <FavoriteButton
              size='small'
              onClick={() => toggleFavorite(character)}
            >
              {isFavorite(character.id) ? (
                <HeartFilledIcon />
              ) : (
                <HeartOutlinedIcon />
              )}
            </FavoriteButton>
          </Wrapper>
          <p>{character.description}</p>
        </Resume>
      </Container>
    </StyledHeader>
  );
};

CharacterInfoCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
