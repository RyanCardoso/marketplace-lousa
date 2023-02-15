// Libs
import React from "react";

// Styles
import * as S from "./styles";

interface ModalType {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Modal = ({ children, isOpen = false, setIsOpen }: ModalType) => {
  const handleIsOpen = () => {
    setIsOpen(false);
  };

  return (
    <S.Container isOpen={isOpen}>
      <S.Content>
        <S.Close onClick={handleIsOpen} />
        {children}
      </S.Content>
    </S.Container>
  );
};
