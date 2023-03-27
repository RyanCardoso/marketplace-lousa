// Libs
import styled from "styled-components";

export const Container = styled.figure`
  position: relative;

  max-width: 400px;

  img {
    width: 100%;
    height: auto;
  }

  &::before {
    content: "";
    position: absolute;
    width: 39px;
    height: 39px;
    left: -10.5px;
    top: -10.5px;

    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 130px;

    position: absolute;
    right: 0;
    bottom: 20px;

    &::before {
      width: 12.68px;
      height: 12.68px;
      left: auto;
      top: auto;
      right: -4.5px;
      bottom: -4.5px;

      box-shadow: 0px 1.30073px 3.9022px rgba(0, 0, 0, 0.25);
      border-radius: 2.60147px;
    }
  }
`;
