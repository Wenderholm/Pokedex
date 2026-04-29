import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) =>
    theme.background === "#121212"
      ? "linear-gradient(to left top, #202427, #2a2f34, #202427)"
      : "linear-gradient(to left top, #cdd7dd, #fbfbfb, #cdd7dd)"};
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  border: 2px solid;
  border-color: ${(props) =>
    !props.$battleResult
      ? "#ccc"
      : props.$battleResult.winner?.id === props.$pokemon?.id
        ? "gold"
        : "#ff4444"};
  box-shadow: ${(props) =>
    props.$battleResult?.winner?.id === props.$pokemon?.id
      ? "0 0 20px gold"
      : "none"};
  opacity: ${(props) =>
    !props.$battleResult
      ? "1"
      : props.$battleResult.loser?.id === props.$pokemon?.id
        ? "0.5"
        : "1"};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  position: relative;
  &:hover {
    border-color: red;
    transform: scale(1.05);
  }
`;

export const ScoreCard = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 50px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
  color: white;
  background-color: black;
  font-size: 12px;
  line-height: 0.5;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const Name = styled.h2`
  margin: 8px 0 20px;
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatValue = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;
