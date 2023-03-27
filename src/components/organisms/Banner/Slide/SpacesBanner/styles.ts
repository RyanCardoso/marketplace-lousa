// Libs
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #08b7a2;
`;

export const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  max-width: 1240px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 85%;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  min-width: 196px;
  color: #ffffff;

  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  span {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    display: block;
  }

  @media (max-width: 768px) {
    width: 30%;
    min-width: 94px;

    font-size: 20px;
    line-height: 30px;

    span {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Figure = styled.div`
  display: flex;
  align-items: center;

  gap: 49px;

  @media (max-width: 768px) {
    position: relative;
    height: 100%;

    align-items: flex-start;
  }
`;
