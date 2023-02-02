// Libs
import React, { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utils
import { formatNumberTwoLength } from "@/utils/consts";

// Mock
import { productData } from "@/Mock/producData";

// Styles
import * as S from "./styles";

interface BoxSliderProps {
  product_id?: string;
  children: ReactNode;
  type?: "primary" | "secondary" | "tertiary";
}

const handleSrc = (product_id: string, index: number) => {
  const find = productData.find((p) => p.id === product_id);

  const imgObj = find?.photoswipe[index];
  const validateSrc = imgObj?.type === "img" ? imgObj?.src : imgObj?.thumbnail;

  return <img src={validateSrc} alt={find?.photoswipe[index].alt} />;
};

export const BoxSlider = ({
  children,
  type = "primary",
  product_id,
}: BoxSliderProps) => {
  const settings = {
    primary: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots: ReactNode) => (
        <S.Dots>
          <ul>{dots}</ul>
        </S.Dots>
      ),
      customPaging: (i: number) => <div>{formatNumberTwoLength(i + 1)}</div>,
    },
    secondary: {
      appendDots: (dots: ReactNode) => (
        <S.AppendDots>
          <ul>{dots}</ul>
        </S.AppendDots>
      ),
      customPaging: (i: any) => (
        <S.DotsImg>{product_id && handleSrc(product_id, i)}</S.DotsImg>
      ),
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    tertiary: {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: (
        <S.SampleNextArrow>
          <img src="/images/arrow.svg" alt="icon_arrow" />
        </S.SampleNextArrow>
      ),
      prevArrow: (
        <S.SamplePrevArrow>
          <img src="/images/arrow.svg" alt="icon_arrow" />
        </S.SamplePrevArrow>
      ),
    },
  };

  return (
    <S.Container>
      <Slider {...settings[type]}>{children}</Slider>
    </S.Container>
  );
};
