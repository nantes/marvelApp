import PropTypes from 'prop-types';
import { useFavoriteCharacters } from '@context/useFavoriteCharacters';
import HeartFilledIcon from '../HeartIcons/HeartFilledIcon';
import HeartOutlinedIcon from '../HeartIcons/HeartOutlinedIcon';

import {
  StyledLi,
  CharacterName,
  Thumbnail,
  CharacterInfo,
  Divider,
  StyledLink,
  StyledIconButton,
} from './CharacterCard.styles';

const CharacterCard = ({ character }) => {
  const { toggleFavorite, isFavorite } = useFavoriteCharacters();
  const handleButtonClick = (event) => {
    toggleFavorite(character);
    event.stopPropagation();
  };

  return (
    <StyledLi>
      <StyledLink to={`/character-details/${character.id}`}>
        <Thumbnail
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </StyledLink>

        <Divider />
        <CharacterInfo>
          <CharacterName>{character.name}</CharacterName>
          <StyledIconButton
            size='small'
            onClick={handleButtonClick}
          >
            {isFavorite(character.id) ? (
              <HeartFilledIcon />
            ) : (
              <HeartOutlinedIcon />
            )}
          </StyledIconButton>
        </CharacterInfo>
    </StyledLi>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    resourceURI: PropTypes.string,
    urls: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    comics: PropTypes.object,
    stories: PropTypes.object,
    events: PropTypes.object,
    series: PropTypes.object,
  }).isRequired,
};

export default CharacterCard;
