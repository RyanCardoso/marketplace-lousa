// Libs
import styled, { css, keyframes } from "styled-components";

interface ModalStylesType {
  isFadeOut: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.section<ModalStylesType>`
  ${({ isFadeOut }) => css`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${isFadeOut ? fadeOut : fadeIn} 0.3s ease-in-out forwards;
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
