// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  gap: 70px;
`;

export const Gallery = styled.div`
  width: 50%;
`;

export const AboutProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  gap: 20px;
`;

export const Price = styled.h3`
  span {
    text-decoration: line-through 1.5px;
    margin-right: 10px;
  }
`;

export const Descriptions = styled.p``;
