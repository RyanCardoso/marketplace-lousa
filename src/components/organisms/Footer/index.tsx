// Libs
import React from "react";

// Atoms
import { Logo } from "@/components/atoms";

// Styles
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Card>
          <Logo />
        </S.Card>

        <S.Card>
          <S.Title>Contato</S.Title>
          <S.Link href="tel:+551128836628">(11) 2883-6628</S.Link>
          <S.Link href="mailto:comercial@companyboard.com.br">
            comercial@companyboard.com.br
          </S.Link>
        </S.Card>

        <S.Card>
          <S.Title>Endereço</S.Title>
          <S.Link href="https://goo.gl/maps/GSpgAvpzCKGyW23W7">
            Rua São Demétrio, 65, Vila Marieta
            <span>Penha, São Paulo, SP - 03618-010</span>
          </S.Link>
        </S.Card>

        <S.Card>
          <S.Title>Siga a gente!</S.Title>
          <S.Figure>
            <S.Link href="#">
              <img src="/images/instagram.svg" alt="icon instagram" />
            </S.Link>
            <S.Link href="#">
              <img src="/images/facebook.svg" alt="icon facebook" />
            </S.Link>
          </S.Figure>
        </S.Card>
      </S.Wrapper>
    </S.Container>
  );
};
