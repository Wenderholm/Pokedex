import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LogoutButton from "./LogoutButton";
import {
  NavStyle,
  StyledLink,
  LinksContainer,
  LogoContainer,
  PokemonLogo,
} from "./Navbar.styled";
import pokemonLogoImg from "../../assets/pokemonLogo.png";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <NavStyle>
      <LogoContainer to="/">
        <PokemonLogo src={pokemonLogoImg} alt="Pokemon Logo" />
      </LogoContainer>

      <LinksContainer>
        {user ? (
          <>
            <span>👋 {user.name}</span>
            <StyledLink to="/favourites">Ulubione</StyledLink>
            <StyledLink to="/arena">Arena</StyledLink>
            <StyledLink to="/ranking">Ranking</StyledLink>
            <StyledLink to="/edit">Edycja</StyledLink>
            <LogoutButton>Wyloguj</LogoutButton>
          </>
        ) : (
          <>
            <StyledLink to="/login">Logowanie</StyledLink>
            <StyledLink to="/register">Rejestracja</StyledLink>
          </>
        )}
      </LinksContainer>
    </NavStyle>
  );
};

export default Navbar;
