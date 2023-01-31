// Libs
import React from "react";
import Link from "next/link";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Styles
import * as S from "./styles";

// Data
import { data } from "./data";

export const Banner = () => {
  return (
    <BoxSlider>
      {data.map((item) => (
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
