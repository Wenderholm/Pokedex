import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 30px;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

export const CreateButtonContainer = styled.div`
  margin-bottom: 30px;
`;

export const CreateButton = styled(Link)`
  display: inline-block;
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  gap: 15px;
`;

export const PokemonCard = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const PokemonNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 15px;
  min-width: 30px;
  color: #666;
`;

export const PokemonImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  image-rendering: pixelated;
`;

export const PokemonInfo = styled.div`
  flex: 1;
`;

export const PokemonName = styled.h3`
  margin: 0;
  text-transform: capitalize;
  color: #333;
  font-size: 18px;
`;

export const PokemonStats = styled.p`
  margin: 5px 0;
  color: #666;
  font-size: 14px;
`;

export const EditButton = styled(Link)`
  padding: 8px 16px;
  background-color: #2196f3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  margin-top: 50px;
  font-size: 16px;
  font-style: italic;
`;
