// Libs
import styled from "styled-components";

export const Slides = styled.div`
  position: relative;
  width: 100%;
  height: 390px;

  display: flex !important;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.15);

  > div {
    width: 95%;
    max-width: 1440px;
  }

  @media (max-width: 230px) {
    height: 230px;
  }
`;
