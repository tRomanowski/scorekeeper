import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Navi>
      <StyledNavLink to='/Main'>Play</StyledNavLink>
      <StyledNavLink to='/History'>History</StyledNavLink>
    </Navi>
  );
}

const Navi = styled.nav`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 20px 88px;
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

  &.active {
    background-color: rgb(51, 51, 51);
    color: rgb(255, 255, 255);
  }
`;
