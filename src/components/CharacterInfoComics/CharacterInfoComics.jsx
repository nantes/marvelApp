import PropTypes from 'prop-types';
import { ComicCard } from '@components/ComicCard/ComicCard';
import {
  Container,
  List,
  StyledHeading,
  StyledSection,
} from './CharacterInfoComics.styles';

export const CharacterInfoComics = ({ comics }) => {
  return (
    <StyledSection>
      <Container>
        <StyledHeading>COMICS</StyledHeading>

        <List>
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </List>
      </Container>
    </StyledSection>
  );
};

CharacterInfoComics.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};
