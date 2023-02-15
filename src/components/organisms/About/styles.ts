// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  max-width: 1000px;

  text-align: center;

  margin: 0 auto;
  padding: 32px 0 18px;

  @media (max-width: 768px) {
    width: 85%;
    padding: 24px 0 0px;
  }
`;

export const Title = styled.h2`
  color: #0a3264;
  font-size: 28px;

  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;

  color: #404040;
  line-height: 24px;

  gap: 23px;
`;
