import PropTypes from 'prop-types';
import { ComicTitle, Container, Image } from './ComicCard.styles';

export const ComicCard = ({ comic }) => {
  const releaseYear = (() => {
    const releaseDate = comic.dates.find((date) => date.type === 'onsaleDate');
    return releaseDate ? new Date(releaseDate.date).getFullYear() : undefined;
  })();

  return (
    <Container>
      <Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <ComicTitle>{comic.title}</ComicTitle>
      {releaseYear && <p>{releaseYear}</p>}
    </Container>
  );
};

ComicCard.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
