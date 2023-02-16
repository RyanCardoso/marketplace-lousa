// Libs
import styled, { css } from "styled-components";

export interface LineStylesTypes {
  width?: string;
  maxWidth?: string;
  margin?: string;
}

export const Container = styled.div<LineStylesTypes>`
  ${({ width, margin, maxWidth }) => css`
    width: ${width || "100%"};
    max-width: ${maxWidth};
    margin: ${margin || "56px auto"};

    border: 1px solid #e4e3e3;

    @media (max-width: 768px) {
      margin: ${margin || "32px auto"};
    }
  `}
`;
