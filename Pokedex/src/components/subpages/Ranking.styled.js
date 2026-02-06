import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const SortContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 20px;
  }
`;

export const SortLabel = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  padding: 50px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 30px;
  }
`;

export const PokemonList = styled.div`
  display: grid;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
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

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const RankNumber = styled.strong`
  font-size: 18px;
  font-weight: bold;
  margin-right: 15px;
  min-width: 30px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    align-self: flex-start;
    margin-right: 0;
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

export const PokemonImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  image-rendering: pixelated;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 0;
    margin-bottom: 8px;
    align-self: center;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const PokemonInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 15px;

  /* Mobile: wrap info items */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const PokemonName = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  min-width: 120px;

  @media (max-width: 768px) {
    font-size: 18px;
    min-width: auto;
    margin-bottom: 5px;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
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

  /* Mobile: make badges wrap nicely */
  @media (max-width: 768px) {
    margin: 2px;
    flex: 0 0 auto;
    font-size: 11px;
    padding: 3px 6px;
    min-width: 50px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 2px 4px;
    min-width: 45px;
  }
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

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 5px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;
