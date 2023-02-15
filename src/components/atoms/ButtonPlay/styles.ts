// Libs
import styled, { keyframes } from "styled-components";

const Anim = keyframes`
    0%{
        transform: scale(0.5);
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: scale(1.2);
        opacity: 0;
    }
`;

export const Play = styled.div`
  border-style: solid;
  border-width: 10px 0px 10px 15px;
  border-color: transparent transparent transparent #fff;
`;

export const Container = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  top: 50%;
  left: 50%;

  cursor: pointer;
  transition: 0.2s ease;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  border-style: none;
  background-color: rgba(0, 0, 0, 0.6);

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;

    left: -30px;
    right: -30px;
    top: -30px;
    bottom: -30px;

    border-radius: 50%;
    border: 2px solid #cdcdcd;

    opacity: 0;
  }

  &:hover {
    &::before,
    &::after {
      animation: ${Anim} 1.5s linear infinite;
    }

    &::after {
      animation-delay: 1s;
    }
  }
`;
