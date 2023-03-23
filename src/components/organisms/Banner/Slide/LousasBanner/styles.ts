// Libs
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("/images/lousas_banner.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 600px) {
    background-image: url("/images/lousas_banner_mobile.png");
  }
`;

export const Description = styled.div`
  position: relative;
  width: 95%;
  max-width: 1440px;

  color: #ffffff;

  &::after {
    content: "";

    position: absolute;
    left: 0;
    top: 0;

    width: 269px;
    height: 136px;
    z-index: -1;

    background: linear-gradient(
      180deg,
      #4a8eff 2.08%,
      rgba(50, 110, 219, 0.37) 100%
    );
    background-blend-mode: darken;

    filter: blur(16px);
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const Type = styled.p`
  font-size: 20px;
`;

export const Title = styled.h1`
  width: 248px;
  font-size: 24px;
`;
