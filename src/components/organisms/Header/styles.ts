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

  a {
    color: #fff !important;
  }
`;

export const Container = styled.div<HeaderStylesProps>`
  ${({ isFixed }) => css`
    width: 100%;
    padding: 32px 0;
    z-index: 999;

    ${isFixed && headerFixed}
  `}
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;

  a {
    font-size: 32px;
    font-weight: 700;
    color: #000;
  }
`;
