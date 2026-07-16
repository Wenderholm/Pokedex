import React from "react";
import ReactDOM from "react-dom";
import {
  Overlay,
  ModalContent,
  CloseButton,
  WinnerTitle,
  WinnerEmoji,
  WinnerName,
} from "./BattleResultModal.styled";

export const BattleResultModal = ({ battleResult, onClose }) => {
  const modalRoot = document.getElementById("modal-root") || document.body;

  if (!battleResult) return null;

  const { winner } = battleResult;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <WinnerEmoji>🏆</WinnerEmoji>
        <WinnerTitle>ZWYCIĘZCA!</WinnerTitle>
        <WinnerName>{winner.name}</WinnerName>
      </ModalContent>
    </Overlay>,
    modalRoot,
  );
};
