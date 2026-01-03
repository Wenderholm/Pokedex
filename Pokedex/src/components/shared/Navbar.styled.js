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

// RouterLink = oryginalny <Link> z react-router-dom
// StyledLink = Twój link z własnym stylem
export const StyledLink = styled(RouterLink)`
  background-color: #2196f3;
  padding: 10px 25px;
  border-radius: 6px;
  color: white;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #ffcb05;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const PokemonLogo = styled.img`
  height: 40px;
  width: auto;
`;
