// Libs
import React from "react";

// Molecules
import { CardDepositions } from "@/components/molecules";

// Mock
import { depositionsData } from "@/Mock/depositionsData";

// Styles
import * as S from "./styles";
import { BoxSlider } from "../Slider";

export const Depositions = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h2>Confira os depoimentos dos nossos clientes</h2>

        <BoxSlider type="tertiary">
          {depositionsData.map((d, index) => (
            <CardDepositions
              key={index}
              message={d.message}
              author={d.author}
            />
          ))}
        </BoxSlider>
      </S.Wrapper>
    </S.Container>
  );
};
