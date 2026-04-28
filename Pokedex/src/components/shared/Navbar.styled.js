import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #292f33;
  color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

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
  transition: all 0.3s ease;
  white-space: nowrap;
  text-align: center;

  &:hover {
    color: #ffcb05;
    background-color: #1976d2;
    transform: translateY(-2px);
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 50px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    padding: 10px 40px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 13px;
    padding: 8px 30px;
    margin-left: 5px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    padding: 8px 20px;
    margin: 2px;
    margin-left: 0;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    padding: 10px 15px;
    margin: 3px 0;
    margin-left: 0;
    width: 140px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const LogoContainer = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const PokemonLogo = styled.img`
  height: 70px;
  width: auto;

  @media (min-width: 1200px) {
    height: 80px;
  }

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

export const DisabledLink = styled.span`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  margin-left: 10px;
  background-color: #555;
  color: #888;
  padding: 10px 45px;
  border-radius: 5px;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  display: inline-block;
  cursor: not-allowed;
  opacity: 0.45;
  pointer-events: none;
  user-select: none;

  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 50px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    padding: 10px 40px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 13px;
    padding: 8px 30px;
    margin-left: 5px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    padding: 8px 20px;
    margin: 2px;
    margin-left: 0;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    padding: 10px 15px;
    margin: 3px 0;
    margin-left: 0;
    width: 140px;
  }
`;
