// Libs
import styled, { css } from "styled-components";

interface HeaderStylesProps {
  isFixed?: boolean;
  isOpen?: boolean;
}

const headerFixed = css`
  position: sticky;
  top: 0;

  box-shadow: 0 2px 12px -3px rgb(0, 0, 0);
  /* transition: 0.5s; */
`;

export const Container = styled.div<HeaderStylesProps>`
  ${({ isFixed }) => css`
    position: relative;
    width: 100%;
    padding: 9.16px 0;

    z-index: 999;
    background-color: #fff;

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
  background-color: #fff;

  @media (max-width: 768px) {
    > ul,
    button {
      display: none;
    }
  }
`;

export const ActionMenu = styled.a`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Dropdown = styled.div<HeaderStylesProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    width: 100%;
    top: 100%;

    transition: 1s;
    background-color: #fff;
  }
`;

export const Content = styled.nav`
  display: flex;
  flex-direction: column;
  width: 95%;

  padding: 30px 0;
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  gap: 32px;

  li {
    overflow: hidden;
    padding: 1px 0;

    a {
      position: relative;
      color: #0a3264;
      padding: 1px 0;

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
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 32px;
  }
`;
