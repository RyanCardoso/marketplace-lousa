// Libs
import styled, { css } from "styled-components";

interface TabsStyleType {
  active: boolean;
}

export const Container = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  gap: 40px;
  margin: 0 auto;
`;

export const Item = styled.li<TabsStyleType>`
  ${({ active }) => css`
    color: #033573;
    cursor: pointer;

    text-decoration: ${active ? "underline" : "none"};
  `}
`;
