// Libs
import React from "react";

// Styles
import * as S from "./styles";

export interface BannerDefaultType {
  img?: string;
  imgMobile?: string;
}

export const BannerDefault = ({ img, imgMobile }: BannerDefaultType) => (
  <S.Banner backgroundImage={img} backgroundImageMobile={imgMobile} />
);
