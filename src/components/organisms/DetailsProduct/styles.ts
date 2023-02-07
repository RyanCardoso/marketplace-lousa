// Libs
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  gap: 27px;
  margin: 0 auto;
`;

export const Gallery = styled.div`
  width: 50%;
  max-width: 600px;
`;

export const AboutProduct = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 20px;
`;

export const Price = styled.h3`
  font-size: 36px;

  span {
    text-decoration: line-through 1.5px;
    margin-right: 10px;
  }
`;

export const Descriptions = styled.p``;
