import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const SortContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SortLabel = styled.label`
  font-weight: bold;
  color: #333;
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 5px rgba(33, 150, 243, 0.3);
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 50px;
`;

export const PokemonList = styled.div`
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

export const RankNumber = styled.strong`
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
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const PokemonName = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  color: #333;
  font-size: 16px;
  min-width: 120px;
`;

export const StatBadge = styled.span`
  padding: 4px 8px;
  background-color: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 4px;
  font-size: 12px;
  color: #1976d2;
  font-weight: bold;
  min-width: 60px;
  text-align: center;
`;

export const WinBadge = styled(StatBadge)`
  background-color: #e8f5e8;
  border-color: #4caf50;
  color: #2e7d32;
`;

export const LoseBadge = styled(StatBadge)`
  background-color: #ffebee;
  border-color: #f44336;
  color: #c62828;
`;
