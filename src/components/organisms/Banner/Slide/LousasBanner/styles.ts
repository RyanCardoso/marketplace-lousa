// Libs
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(180deg, #3A4B73 0%, #101D3F 100%);
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    width: 85%;
    justify-content: flex-start;
  }
`

export const Description = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    min-width: 190px;
  }
`;

export const Title = styled.h1`
  color: #1EFF5D;
  font-size: 48px;
  line-height: 64px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;
  margin-top: 12px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      color: #FFFFFF;
    }

    @media (max-width: 768px) { 
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

export const Figure = styled.figure`
  max-width: 653px;
  width: 60%;
  height: 329px;

  background-color: #D9D9D9;
  background-image: url("/images/lousas_banner.png");
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 181.887px 0px 0px 181.887px;

  @media (max-width: 768px) { 
    position: absolute;
    width: 42%;
    height: 230px;
    right: 0;
  
    background-position: 70% 0;
    border-radius: 74.7405px 0px 0px 74.7405px;
  }

  @media (max-width: 500px) {
    background-image: url("/images/lousas_banner_mobile.png");
  }
`