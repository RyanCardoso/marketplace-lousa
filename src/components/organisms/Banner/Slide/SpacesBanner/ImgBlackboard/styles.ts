// Libs
import styled from "styled-components";

export const Container = styled.figure`
  position: relative;
  max-width: 334px;

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
    bottom: -10.5px;

    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 153px;

    margin: 20px 10px 0 0;

    &::before {
      width: 17.97px;
      height: 17.97px;
      right: auto;
      bottom: auto;
      top: -7.5px;
      left: -7.5px;

      box-shadow: 0px 1.30073px 3.9022px rgba(0, 0, 0, 0.25);
      border-radius: 2.60147px;
    }
  }
`;
