import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom"; // import Link z react-router-dom
import LogoutButton from "./LogoutButton";

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #292f33;
  color: white;
`;

export const StyledLinkWrapper = styled.div``;
export const UserWrapper = styled.div``;

// RouterLink = oryginalny <Link> z react-router-dom
// StyledLink = Twój link z własnym stylem
export const StyledLink = styled(RouterLink)`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  margin-left: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 45px;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    color: #ffcb05;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const LogoContainer = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const PokemonLogo = styled.img`
  height: 70px;
  width: auto;
`;
