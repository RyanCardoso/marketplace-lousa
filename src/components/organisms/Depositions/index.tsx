// Libs
import React, { useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Molecules
import { CardDepositions } from "@/components/molecules";

// Mock
import { depositionsData } from "@/Mock/depositionsData";

// Styles
import * as S from "./styles";
import { BoxSlider } from "../Slider";

export const Depositions = () => {
  const { testimonies } = useContext(ProductContext);

  console.log(testimonies);

  return (
    <S.Container>
      <S.Wrapper data-aos="fade-up">
        <h2>Confira os depoimentos dos nossos clientes</h2>

        <BoxSlider type="tertiary">
          {testimonies?.map((d, index) => (
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
