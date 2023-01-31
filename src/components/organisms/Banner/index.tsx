// Libs
import React from "react";
import Link from "next/link";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Styles
import * as S from "./styles";

// Data
import { bannerData } from "@/Mock/bannerData";

export const Banner = () => {
  return (
    <BoxSlider>
      {bannerData.map((item) => (
        <S.Slides key={item.id}>
          <div>
            <p>New Arrivals</p>
            <h1>{item.name}</h1>
            <Link href={`/produto/${item.id}`}>Shop now</Link>
          </div>
        </S.Slides>
      ))}
    </BoxSlider>
  );
};
