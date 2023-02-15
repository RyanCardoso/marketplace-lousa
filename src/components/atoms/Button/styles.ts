// Libs
import styled, { css } from "styled-components";

interface ButtonStyleType {
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const Container = styled.button<ButtonStyleType>`
  ${({ width, height, color, borderColor, backgroundColor }) => css`
    width: 100%;
    height: ${height};
    max-width: ${width || "248px"};

    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 10px;
    padding: 10px 0;

    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    color: ${color || "#fff"};

    cursor: pointer;

    border: none;
    border: ${borderColor && `1px solid ${borderColor}`};
    background-color: ${backgroundColor || "#0a3264"};

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
