import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LogoutButton from "./shared/LogoutButton";
import { NavStyle, StyledLink, LinksContainer } from "./Navbar.styled";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <NavStyle>
      <StyledLink to="/">Pokedex</StyledLink>

      <LinksContainer>
        {user ? (
          <>
            <span>👋 {user.name}</span>
            <StyledLink to="/favourites">Ulubione</StyledLink>
            <StyledLink to="/arena">Arena</StyledLink>
            <StyledLink to="/ranking">Ranking</StyledLink>
            <StyledLink to="/edit">Edycja</StyledLink>
            <LogoutButton />
          </>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
      </LinksContainer>
    </NavStyle>
  );
};

export default Navbar;
