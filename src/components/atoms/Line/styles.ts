// Libs
import styled, { css } from "styled-components";

interface LineStylesTypes {
  width?: string;
  margin?: string;
}

export const Container = styled.div<LineStylesTypes>`
  ${({ width, margin }) => css`
    width: ${width || "100%"};
    margin: ${margin || "56px 0"};

    border: 1px solid #e4e3e3;
  `}
`;
