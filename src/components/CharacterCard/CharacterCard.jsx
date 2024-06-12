import PropTypes from 'prop-types';
import { useFavoriteCharacters } from '@context/useFavoriteCharacters';
import HeartFilledIcon from '@components/HeartIcons/HeartFilledIcon';
import HeartOutlinedIcon from '@components/HeartIcons/HeartOutlinedIcon';
import { FavoriteButton } from '@components/FavoriteButton/FavoriteButton';
import {
  StyledLi,
  CharacterName,
  Thumbnail,
  CharacterInfo,
  Divider,
  StyledLink
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
