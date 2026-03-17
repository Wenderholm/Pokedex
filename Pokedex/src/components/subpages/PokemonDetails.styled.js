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

  button {
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  button:first-child {
    background: #959293ff;
  }

  button:first-child:hover {
    background: #faf0f2ff;
  }

  button:last-child {
    background: #e8edff;
  }

  button:last-child:hover {
    background: #86878bff;
  }

  button:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;
