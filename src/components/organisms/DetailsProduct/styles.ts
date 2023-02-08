// Libs
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  gap: 27px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      display: none;
    }
  }
`;

export const Gallery = styled.div`
  width: 50%;
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

export const AboutProduct = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 20px;
`;

export const Price = styled.h3`
  color: #404040;
  font-size: 28px;

  span {
    text-decoration: line-through 1.5px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Descriptions = styled.p`
  color: #404040 red;
  line-height: 24px;
`;
