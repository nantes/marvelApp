import { StyledFavoriteButton } from './FavoriteButton.styles';

export const FavoriteButton = ({
  onClick,
  icon: Icon,
  size = 'medium',
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <StyledFavoriteButton onClick={handleClick} size={size} {...props}>
      <Icon />
    </StyledFavoriteButton>
  );
};
