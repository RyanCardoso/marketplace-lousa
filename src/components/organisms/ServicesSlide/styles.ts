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
  width: 33.3vw !important;
  max-width: 450px;
  height: 350px;

  img,
  iframe {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100% !important;
    max-width: none;
    height: 246px;
  }
`;
