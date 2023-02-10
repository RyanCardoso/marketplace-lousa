// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 0 106px;

  h3 {
    color: #0a3264;
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const Figure = styled.figure`
  max-width: 450px;
  height: 350px;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: none;
    height: 246px;
  }
`;
