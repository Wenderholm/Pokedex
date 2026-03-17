import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 5px rgba(33, 150, 243, 0.3);
  }
`;

export const ImageSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const ArrowButton = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#2196F3")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #1976d2;
  }
`;

export const ImagePreviewContainer = styled.div`
  text-align: center;
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  opacity: ${(props) => (props.$isUsed ? 0.3 : 1)};
  filter: ${(props) => (props.$isUsed ? "grayscale(100%)" : "none")};
  image-rendering: pixelated;
  border: ${(props) => (props.$isUsed ? "2px solid red" : "2px solid green")};
  border-radius: 8px;
  padding: 10px;
  background-color: white;
  transition: all 0.3s ease;
`;

export const ImageInfo = styled.div`
  margin-top: 10px;
`;

export const ImageId = styled.strong`
  font-size: 16px;
  color: #333;
`;

export const UsedWarning = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  padding: 15px 20px;
  font-size: 18px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#4CAF50")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #45a049;
  }
`;
