import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledNav, StyledNavFavorites } from './Header.styles';
import { NavLink } from 'react-router-dom';
import marvelLogo from '@assets/marvel_logo.svg';
import HeartFilledIcon from '@components/Icons/HeartFilledIcon';
import { useFavoriteCharacters } from '@context/useCharacters';
import LoadingBar from '@components/LoadingBar/LoadingBar';

export const Header = ({ isLoading }) => {
  const { favorites } = useFavoriteCharacters();

  return (
    <>
      <header>
        <StyledNav>
          <NavLink to='/'>
            <img src={marvelLogo} alt='marvel-logo-home-link' />
          </NavLink>
          <StyledNavFavorites to='/favorites'>
            <HeartFilledIcon isHovered={false} />
            <p>{favorites.length}</p>
          </StyledNavFavorites>
        </StyledNav>
      </header>
      <LoadingBar loading={isLoading} />
      <Outlet />
    </>
  );
};

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
