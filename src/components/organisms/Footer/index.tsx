// Libs
import React from "react";

// Styles
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Card>
          <S.Logo>Company Board</S.Logo>
        </S.Card>

        <S.Card>
          <S.Title>Fale conosco</S.Title>
          <S.Link href="tel:+551128836628">+55 11 2883-6628</S.Link>
          <S.Link href="mailto:comercial@companyboard.com.br">
            comercial@companyboard.com.br
          </S.Link>
        </S.Card>

        <S.Card>
          <S.Title>Localização</S.Title>
          <S.Link href="https://goo.gl/maps/GSpgAvpzCKGyW23W7">
            R. São Demétrio, 65 - Vila Marieta
            <span>São Paulo - SP, 03618-010</span>
          </S.Link>
        </S.Card>

        <S.Card>
          <S.Title>Follow Us</S.Title>
        </S.Card>
      </S.Wrapper>
    </S.Container>
  );
};
