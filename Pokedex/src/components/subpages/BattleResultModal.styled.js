import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  color: #333;
  padding: 40px;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  color: #666;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f0f0f0;
    color: #333;
  }
`;

export const WinnerTitle = styled.h2`
  font-size: 28px;
  margin: 20px 0;
  color: #ff6b35;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const WinnerEmoji = styled.div`
  font-size: 60px;
  margin: 20px 0;
`;

export const WinnerName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 15px 0;
  text-transform: capitalize;
`;
