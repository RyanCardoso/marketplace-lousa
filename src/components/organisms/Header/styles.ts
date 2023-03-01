// Libs
import styled, { css } from "styled-components";

interface HeaderStylesProps {
  isOpen?: boolean;
}

export const Container = styled.div<HeaderStylesProps>`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;

  padding: 9.16px 0;

  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #f2f1f1;
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
    width: 85%;

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
  ${({ isOpen }) => css`
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      width: 100%;
      height: calc(100vh - 62.98px);
      top: calc(100% + 1px);
      left: ${isOpen ? 0 : "-100%"};
      visibility: ${isOpen ? "visible" : "hidden"};

      background-color: #fff;
      transition: 0.3s ease-in-out;
    }
  `}
`;

export const Content = styled.nav`
  display: flex;
  flex-direction: column;
  width: 85%;

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
