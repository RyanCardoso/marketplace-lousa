// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1440px;
  min-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;
  padding: 29px 0 69px;

  @media (max-width: 786px) {
    width: 85%;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: 1s;

  margin-top: 34px;
  column-gap: 31px;
  row-gap: 45px;

  @media (max-width: 1045px) {
    justify-content: space-evenly;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #004178;  
  }

  p {
    color: #000000;
    line-height: 24px;
  }
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 70vh;

  border: none;
`;