// Libs
import styled from "styled-components";

// Styles
import * as S from "./styles";

interface BurgerType {
  onClick?: () => void;
  isOpen?: boolean;
}

export const Burger = ({ onClick, isOpen }: BurgerType) => {
  return (
    <S.Container isOpen={isOpen} onClick={onClick}>
      <div />
      <div />
      <div />
    </S.Container>
  );
};
