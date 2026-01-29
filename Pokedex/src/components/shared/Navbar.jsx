import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import LogoutButton from "./LogoutButton";

import Switch from "@mui/material/Switch";

import {
  NavStyle,
  StyledLink,
  LinksContainer,
  LogoContainer,
  PokemonLogo,
  StyledLinkWrapper,
  UserWrapper,
} from "./Navbar.styled";
import pokemonLogoImg from "../../assets/pokemonLogo.png";

const Navbar = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <NavStyle>
      <LogoContainer to="/">
        <PokemonLogo src={pokemonLogoImg} alt="Pokemon Logo" />
      </LogoContainer>

      <LinksContainer>
        {user ? (
          <>
            <UserWrapper>
              👤 {user.name}
              <Switch checked={theme === "dark"} onChange={toggleTheme} />
            </UserWrapper>
            <StyledLinkWrapper>
              <StyledLink to="/favourites">Ulubione</StyledLink>
              <StyledLink to="/arena">Arena</StyledLink>
              <StyledLink to="/ranking">Ranking</StyledLink>
              <StyledLink to="/edit">Edycja</StyledLink>
              <LogoutButton>Wyloguj</LogoutButton>
            </StyledLinkWrapper>
          </>
        ) : (
          <StyledLinkWrapper>
            <StyledLink to="/login">Logowanie</StyledLink>
            <StyledLink to="/register">Rejestracja</StyledLink>
          </StyledLinkWrapper>
        )}
      </LinksContainer>
    </NavStyle>
  );
};

export default Navbar;
