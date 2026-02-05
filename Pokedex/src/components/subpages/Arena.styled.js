import styled from "styled-components";

export const ArenaContainer = styled.div``;

export const ArenaFightArea = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
`;

export const PokemonContainer = styled.div`
  position: relative;
`;

export const PokemonTitle = styled.h3``;

export const RemoveButton = styled.button`
  position: absolute;
  top: 70px;
  right: 10px;
  background-color: #2196f3;
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: white;
`;

export const FightButtonContainer = styled.div`
  align-self: center;
`;

export const FightButton = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: ${(props) =>
    props.$battleResult !== null ? "#ccc" : "#ff4444"};
  color: ${(props) => (props.$battleResult !== null ? "#888" : "white")};
  border: none;
  border-radius: 10px;
  cursor: ${(props) =>
    props.$battleResult !== null ? "not-allowed" : "pointer"};
  opacity: ${(props) => (props.$battleResult !== null ? 0.6 : 1)};
  transition: all 0.3s ease;
`;

export const ButtonsContainer = styled.div`
  margin-top: 30px;
`;

export const NewBattleButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ExitArenaButton = styled.button`
  padding: 10px 20px;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
