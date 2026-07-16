import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: min(520px, 100%);
  margin: 20px auto;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid
    ${({ theme }) => (theme.background === "#121212" ? "#4b5563" : "#ccc")};
  background-color: ${({ theme }) =>
    theme.background === "#121212" ? "#1f252a" : "#fff"};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) =>
      theme.background === "#121212" ? "#8ea2ff" : "#667eea"};
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.background === "#121212" ? "#9ca3af" : "#999"};
  }
`;

export const NumberInput = styled(Input).attrs({ type: "number" })`
  width: 90%;
  align-self: center;
`;

export const SubmitButton = styled.button`
  padding: 15px 20px;
  font-size: 18px;
  width: 90%;

  background-color: ${(props) => (props.$isEdit ? "#FF9800" : "#4CAF50")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$isEdit ? "#F57C00" : "#45a049")};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;
