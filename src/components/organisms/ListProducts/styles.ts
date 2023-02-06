// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1440px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: 1s;

  padding: 83px 0 69px;
  column-gap: 31px;
  row-gap: 45px;

  margin: 0 auto;

  @media (max-width: 1045px) {
    justify-content: space-evenly;
  }

  @media (max-width: 786px) {
    width: 85%;
  }
`;
