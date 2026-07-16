import React from "react";
import {
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
} from "./LoadingMessage.styled";

const LoadingMessage = ({ message = "Ładowanie..." }) => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingMessage;
