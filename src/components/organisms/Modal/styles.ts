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

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  border-bottom: solid 1px #cdcdcd;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h2``;

export const Close = styled.div`
  position: relative;
  width: 30px;
  height: 30px;

  cursor: pointer;
  transform: rotate(45deg);

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    top: 45%;
    left: 0;

    background-color: #ff5151;
  }

  &::before {
    transform: rotate(90deg);
  }
`;
