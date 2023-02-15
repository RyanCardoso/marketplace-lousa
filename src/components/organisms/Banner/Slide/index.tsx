// Libs
import React from "react";
import Link from "next/link";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Data
import { bannerData } from "@/Mock/bannerData";

// Styles
import * as S from "./styles";

export const BannerSlide = () => (
  <BoxSlider>
    {bannerData.map((item) => (
      <S.Slides key={item.id}>
        <div data-aos="fade-up">
          <p>New Arrivals</p>
          <h1>{item.name}</h1>
          <Link href={`/produto/${item.id}`}>Shop now</Link>
        </div>
      </S.Slides>
    ))}
  </BoxSlider>
);
