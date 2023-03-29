// Styes
import * as S from "./styles";

export const settings = {
  primary: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <></>,
    prevArrow: <></>,
    appendDots: (dots: React.ReactNode) => (
      <S.DotsNumber>
        <ul>{dots}</ul>
      </S.DotsNumber>
    ),
    customPaging: (i: number) => <div>{i + 1}</div>,
  },
  secondary: {
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
  tertiary: {
    className: "slider variant-tertiary",
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots: React.ReactNode) => (
      <S.RoundDots>
        <ul>{dots}</ul>
      </S.RoundDots>
    ),
    nextArrow: (
      <S.SampleNextArrow right="30px">
        <img src="/images/arrow.svg" alt="icon_arrow" />
      </S.SampleNextArrow>
    ),
    prevArrow: (
      <S.SamplePrevArrow left="30px">
        <img src="/images/arrow.svg" alt="icon_arrow" />
      </S.SamplePrevArrow>
    ),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          infinite: true,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  },
};
