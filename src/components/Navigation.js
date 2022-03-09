import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default function Navigation({ isDark }) {
  return (
    <Navi>
      <StyledNavLink isDark={isDark} to='/'>
        Play
      </StyledNavLink>
      <StyledNavLink isDark={isDark} to='/history'>
        History
      </StyledNavLink>
    </Navi>
  );
}

const Navi = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  text-align: center;
  background-color: rgb(211, 211, 211);
  border: 1px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  width: 100%;

  ${({ isDark }) =>
    isDark &&
    css`
      background-color: rgb(51, 51, 51);
      color: rgb(255, 255, 255);
    `}
`;
