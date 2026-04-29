import styled from "styled-components";

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  background-color: ${({ theme }) =>
    theme.background === "#121212" ? "#1976d2" : "#2196f3"};
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 7px 14px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    color: #ffcb05;
    background-color: #1976d2;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PaginationInfo = styled.span`
  font-size: 12px;
  font-weight: 700;
`;
