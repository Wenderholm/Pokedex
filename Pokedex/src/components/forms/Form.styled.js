import styled from "styled-components";

export const FormContainer = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 30px;
  color: #f0f0f0;
  background-color: #27292b;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const FormTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #09a97f;
  text-align: center;
`;

export const FormDescription = styled.p`
  font-size: 24px;
  margin: 20px 0 15px 0;
  color: #f5ab44;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border-radius: 6px;
  background-color: #3f4a5c;
  border: 2px solid transparent;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    outline: none;
    border-color: #4da3ff;
    box-shadow: 0 0 8px rgba(77, 163, 255, 0.3);
  }

  &:hover {
    border-color: #666;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4757;
  font-size: 14px;
  margin: 0;
  padding-left: 4px;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  padding: 14px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const FormLink = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #b0b0b0;

  a {
    color: #4da3ff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #09a97f;
      text-decoration: underline;
    }
  }
`;
