// Libs
import React from "react";

// Atoms
import { Input, TextArea } from "@/components/atoms";

// Styles
import * as S from "./styles";

export const FormContact = () => {
  return (
    <S.Container>
      <S.Title>Mais informações envie sua mensagem</S.Title>
      <S.Form>
        <Input placeholder="Nome Completo" width="100" />

        <S.Group>
          <Input placeholder="E-mail" />
          <Input placeholder="Celular" />
        </S.Group>

        <TextArea placeholder="Mensagem" />
      </S.Form>
    </S.Container>
  );
};
