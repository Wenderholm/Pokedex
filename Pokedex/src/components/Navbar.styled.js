import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom"; // import Link z react-router-dom
import LogoutButton from "./shared/LogoutButton";
import { useAuth } from "../context/AuthContext";

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #2a75bb;
  color: white;
`;

// RouterLink = oryginalny <Link> z react-router-dom
// StyledLink = Twój link z własnym stylem
export const StyledLink = styled(RouterLink)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;

  &:hover {
    color: #ffcb05;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
