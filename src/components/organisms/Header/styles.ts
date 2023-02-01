// Libs
import styled, { css } from "styled-components";

interface HeaderStylesProps {
  isFixed: boolean;
}

const headerFixed = css`
  position: sticky;
  top: 0;

  background-color: #054a85;
  box-shadow: 0 2px 12px -3px rgb(0, 0, 0);
  transition: 0.5s;

  a {
    color: #fff !important;
  }
`;

export const Container = styled.div<HeaderStylesProps>`
  ${({ isFixed }) => css`
    width: 100%;
    padding: 9.16px 0;
    z-index: 999;

    ${isFixed && headerFixed}
  `}
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
  column-gap: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  gap: 32px;

  a {
    position: relative;
    overflow: hidden;
    color: #0a3264;
    padding: 1px;

    &::before {
      content: "";

      position: absolute;
      width: 100%;
      bottom: 0;
      right: 100%;

      z-index: 99;
      transition: 0.4s;
      border-bottom: 1.5px solid #0a3264;
    }

    &:hover {
      &::before {
        right: 0;
      }
    }
  }
`;
