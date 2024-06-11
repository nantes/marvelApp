import PropTypes from 'prop-types';
import {
  StyledLi,
  CharacterName,
  Thumbnail,
  CharacterInfo,
  Divider,
} from './CharacterCard.styles';

const CharacterCard = ({ character }) => {
  return (
    <StyledLi>
      <Thumbnail
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <Divider />
      <CharacterInfo>
        <CharacterName level='p2'>{character.name}</CharacterName>
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
