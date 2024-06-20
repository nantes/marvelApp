import PropTypes from 'prop-types';
import { StyledFavoriteButton } from './FavoriteButton.styles';

export const FavoriteButton = ({ onClick, size = 'medium', ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <StyledFavoriteButton
      onClick={handleClick}
      size={size}
      {...props}
    ></StyledFavoriteButton>
  );
};

FavoriteButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
