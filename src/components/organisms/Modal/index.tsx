// Libs
import React, { useState } from "react";

// Styles
import * as S from "./styles";

interface ModalType {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  setIsOpen: (value: boolean) => void;
}

export const Modal = ({
  children,
  isOpen = false,
  title = 'Video',
  setIsOpen,
}: ModalType) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsOpen(false);
      setIsClosing(false);
    }
  };

  const handleIsOpen = () => {
    setIsClosing(true);
  };

  return isOpen ? (
    <S.Container
      isFadeOut={isClosing}
      onClick={handleIsOpen}
      onAnimationEnd={handleAnimationEnd}
    >
      <S.Content onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Close onClick={handleIsOpen} />
        </S.Header>
        {children}
      </S.Content>
    </S.Container>
  ) : null;
};
