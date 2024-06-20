import { Outlet } from 'react-router-dom';
import { StyledNav, StyledNavFavorites } from './Header.styles';
import { NavLink } from 'react-router-dom';
import marvelLogo from '@assets/marvel_logo.svg';
import HeartFilledIcon from '@components/Icons/HeartFilledIcon';
import { useFavoriteCharacters } from '@context/useFavoriteCharacters';

export const Header = () => {
  const { favorites } = useFavoriteCharacters();

  return (
    <>
      <header>
        <StyledNav>
          <NavLink to='/'>
            <img src={marvelLogo} alt='marvel-logo-home-link' />
          </NavLink>
          <StyledNavFavorites to='/favorites'>
            <HeartFilledIcon />
            <p>{favorites.length}</p>
          </StyledNavFavorites>
        </StyledNav>
      </header>
      <Outlet />
    </>
  );
};
