import styled from "styled-components";

export const PokemonDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 0 16px;
`;

export const PokemonCardWrapper = styled.div`
  background: linear-gradient(to left top, #cdd7dd, #fbfbfb, #cdd7dd);
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #ccc;
  text-transform: uppercase;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  max-width: 760px;
  width: 100%;

  @media (max-width: 960px) {
    max-width: 660px;
    padding: 10px;
  }

  @media (max-width: 760px) {
    max-width: 560px;
    padding: 8px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const ScoreCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
  color: white;
  background-color: black;
  font-size: 12px;
  line-height: 0.5;
`;

export const PokemonImg = styled.img`
  width: 300px;
  object-fit: cover;

  @media (max-width: 960px) {
    width: 240px;
  }

  @media (max-width: 760px) {
    width: 190px;
  }

  @media (max-width: 560px) {
    width: min(240px, 100%);
    margin: 0 auto;
  }
`;
export const ExpSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 14px;
  width: 400px;

  @media (max-width: 960px) {
    width: 340px;
    padding: 12px;
  }

  @media (max-width: 760px) {
    width: 300px;
    padding: 10px;
  }

  @media (max-width: 560px) {
    width: 100%;
    padding: 10px 6px;
  }
`;

export const ExpSectionPokemonName = styled.h2`
  color: black;
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const StatRowOne = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 760px) {
    gap: 12px;
  }

  @media (max-width: 420px) {
    gap: 8px;
  }
`;

export const StatRowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 760px) {
    gap: 12px;
  }

  @media (max-width: 420px) {
    gap: 8px;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StatValue = styled.span`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;

  @media (max-width: 420px) {
    font-size: 11px;
  }
`;

export const StatLabel = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  text-transform: none;

  @media (max-width: 760px) {
    font-size: 15px;
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

export const PokemonCardButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HeartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 10px;
  border: 2px solid ${(props) => (props.$active ? "#e53935" : "#aaa")};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => (props.$active ? "#fce4ec" : "#f5f5f5")};
  color: ${(props) => (props.$active ? "#e53935" : "#555")};

  img {
    width: 22px;
    height: 22px;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  &:hover {
    background: ${(props) => (props.$active ? "#f8bbd0" : "#e0e0e0")};
  }

  &:hover img {
    transform: scale(1.07);
  }
`;

export const SwordButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 10px;
  border: 2px solid ${(props) => (props.$active ? "#1565c0" : "#aaa")};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => (props.$active ? "#e3f2fd" : "#f5f5f5")};
  color: ${(props) => (props.$active ? "#1565c0" : "#555")};

  img {
    width: 22px;
    height: 22px;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  &:disabled {
    background: #ddd;
    cursor: not-allowed;
    border-color: #ccc;
    color: #999;
    opacity: 0.6;

    img {
      filter: grayscale(1);
    }
  }

  &:hover:not(:disabled) {
    background: ${(props) => (props.$active ? "#bbdefb" : "#e0e0e0")};
  }

  &:hover:not(:disabled) img {
    transform: scale(1.07);
  }
`;
