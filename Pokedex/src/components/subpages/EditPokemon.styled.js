import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 50px;
`;

export const PokemonPreviewCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  image-rendering: pixelated;
`;

export const PokemonInfo = styled.div`
  flex: 1;
`;

export const PokemonName = styled.h2`
  margin: 0;
  text-transform: capitalize;
  color: #333;
`;

export const PokemonStats = styled.p`
  margin: 5px 0;
  color: #666;
  font-size: 14px;
`;
