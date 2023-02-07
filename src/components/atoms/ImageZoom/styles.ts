// Libs
import styled from "styled-components";

export const Figure = styled.figure`
  width: 100% !important;
  height: 100% !important;

  background-repeat: no-repeat;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    img {
      opacity: 0;
    }
  }
`;
