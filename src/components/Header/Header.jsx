import { Outlet } from 'react-router-dom';
import { StyledNav } from './Header.styles';

export const Header = () => (
  <>
    <header>
      <StyledNav>
      </StyledNav>
    </header>
    <Outlet />
  </>
);
