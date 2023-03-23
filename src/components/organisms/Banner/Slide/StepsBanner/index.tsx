// Libs
import React from "react";
import Image from "next/image";

// Styles
import * as S from "./styles";

export const StepsBanner = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Description>
          <h2>Passo a passo</h2>
          <h1>Como solicitar nossos serviços</h1>
        </S.Description>

        <S.BoxSteps>
          <S.Steps>
            <Image src="/images/step_1.svg" alt="" width="176" height="160" />
            <S.StepDescription width="123px">
              <h2>1</h2>
              <h3>Entre em contato com a gente</h3>
            </S.StepDescription>
          </S.Steps>

          <Image src="/images/arrow_steps.svg" alt="" width="65" height="65" />

          <S.Steps>
            <Image src="/images/step_2.svg" alt="" width="176" height="160" />
            <S.StepDescription>
              <h2>2</h2>
              <h3>Agende sua visita técnica e receba orçamento</h3>
            </S.StepDescription>
          </S.Steps>

          <Image src="/images/arrow_steps.svg" alt="" width="65" height="65" />

          <S.Steps>
            <Image src="/images/step_3.svg" alt="" width="176" height="160" />
            <S.StepDescription>
              <h2>3</h2>
              <h3>Execução do serviço aprovado no orçamento</h3>
            </S.StepDescription>
          </S.Steps>
        </S.BoxSteps>
      </S.Wrapper>
    </S.Container>
  );
};
