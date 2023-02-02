// Libs
import styled, { css } from "styled-components";

interface BurgerStylesType {
  isOpen?: boolean;
}

const handleAnimation = css`
  &:nth-child(1) {
    transform: translateY(3.6px) rotate(-45deg);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:nth-child(3) {
    transform: translateY(-5px) rotate(45deg);
  }
`;

export const Container = styled.a<BurgerStylesType>`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  width: 17.5px;

  gap: 2px;

  div {
    display: block;

    width: 100%;
    height: 2px;
    border-radius: 10px;

    background: #033573;

    transition: 0.25s;

    user-select: none;

    ${({ isOpen }) => isOpen && handleAnimation}

    @media (min-width: 769px) {
      display: none;
    }
  }
`;
