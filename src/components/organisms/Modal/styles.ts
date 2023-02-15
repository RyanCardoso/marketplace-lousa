// Libs
import styled, { css } from "styled-components";

interface ModalStylesType {
  isOpen: boolean;
}

export const Container = styled.section<ModalStylesType>`
  ${({ isOpen }) => css`
    position: fixed;
    width: 100%;
    height: ${isOpen ? "100vh" : "0"};
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;
    overflow: hidden;
    opacity: ${isOpen ? "1" : "0"};
    transition: opacity 0.5s ease;
    background-color: rgba(0, 0, 0, 0.5);
  `}
`;

export const Content = styled.div`
  width: 95%;
  max-width: 1200px;
  position: relative;

  padding: 30px;
  background-color: #fff;
`;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;

  cursor: pointer;
  border-radius: 50%;
  background-color: red;
`;
