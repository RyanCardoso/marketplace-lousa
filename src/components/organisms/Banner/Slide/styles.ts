// Libs
import styled, { css } from "styled-components";

interface BannerDefaultStylesType {
  backgroundImage: string;
  backgroundImageMobile?: string;
}

export const Slides = styled.section`
  position: relative;
  width: 100%;
  height: 390px;

  display: flex !important;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.15);

  > div {
    width: 95%;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    height: 230px;

    > div {
      width: 85%;
    }
  }
`;

export const Banner = styled.section<BannerDefaultStylesType>`
  ${({ backgroundImage, backgroundImageMobile }) => css`
    width: 100%;
    height: 231px;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      height: 140px;
      background-image: url(${backgroundImageMobile});
    }
  `}
`;
