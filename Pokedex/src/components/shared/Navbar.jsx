import { useContext } from "react";
import { useAuth } from "../../context/auth-context";
import { ThemeContext } from "../../context/theme-context";
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
  ThemeModeLabel,
} from "./Navbar.styled";
import pokemonLogoImg from "../../icons/pokemonLogo.png";

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
              <ThemeModeLabel>
                {theme === "dark" ? "DarkMode" : "LightMode"}
              </ThemeModeLabel>
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
          <>
            <UserWrapper>
              <ThemeModeLabel>
                {theme === "dark" ? "DarkMode" : "LightMode"}
              </ThemeModeLabel>
              <Switch checked={theme === "dark"} onChange={toggleTheme} />
            </UserWrapper>
            <StyledLinkWrapper>
              <StyledLink to="/login">Logowanie</StyledLink>
              <StyledLink to="/register">Rejestracja</StyledLink>
            </StyledLinkWrapper>
          </>
        )}
      </LinksContainer>
    </NavStyle>
  );
};

export default Navbar;
