// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 32px 0 56px;

  h2 {
    color: #0a3264;
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 85%;

    h2 {
      font-size: 20px;
    }
  }
`;

export const BoxCard = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  gap: 56px;
  margin-top: 34px;
`;

export const Card = styled.div`
  width: 20%;
  min-width: 224px;

  text-align: center;

  h4 {
    color: #0a3264;
    font-size: 20px;

    margin-bottom: 8px;
  }

  p {
    color: #404040;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
