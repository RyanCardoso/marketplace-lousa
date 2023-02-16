// Libs
import React, { useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Molecules
import { CardDepositions } from "@/components/molecules";

// Styles
import * as S from "./styles";

export const Depositions = () => {
  const { testimonies } = useContext(ProductContext);

  return (
    <S.Container>
      <S.Wrapper data-aos="fade-up">
        <h2>Confira os depoimentos dos nossos clientes</h2>

        <BoxSlider variant="secondary">
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
