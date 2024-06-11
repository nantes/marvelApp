import { Outlet } from 'react-router-dom';
import { StyledNav } from './Header.styles';
import { NavLink } from 'react-router-dom';
import marvelLogo from '@assets/marvel_logo.svg';

export const Header = () => (
  <>
    <header>
      <StyledNav>
        <NavLink to='/'>
            <img src={marvelLogo} alt='marvel-logo-home-link' />
        </NavLink>
      </StyledNav>
    </header>
    <Outlet />
  </>
);
