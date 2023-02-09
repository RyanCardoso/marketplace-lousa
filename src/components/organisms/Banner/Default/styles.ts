// Libs
import styled, { css } from "styled-components";

interface BannerDefaultStylesType {
  backgroundImage?: string;
  backgroundImageMobile?: string;
}

export const Banner = styled.section<BannerDefaultStylesType>`
  ${({ backgroundImage, backgroundImageMobile }) => css`
    width: 100%;
    height: 231px;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      height: 140px;

      background-image: ${backgroundImageMobile &&
      `url(${backgroundImageMobile})`};
    }
  `}
`;
