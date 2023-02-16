// Libs
import React from "react";

// Molecules
import { Ads } from "@/components/molecules";

// Mock
import { servicesData } from "@/Mock/servicesData";

// Styles
import * as S from "./styles";

export const OurServices = () => {
  return (
    <S.Container>
      <h2>Oferecemos serviços diversos para o seu projeto</h2>

      <S.BoxCard>
        {servicesData.map((item) => (
          <S.Card key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </S.Card>
        ))}
      </S.BoxCard>
    </S.Container>
  );
};
