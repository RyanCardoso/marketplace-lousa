// Libs
import React from "react";

// Styles
import * as S from "./styles";

interface CardDepositionsType {
  message: string;
  author: string;
}

export const CardDepositions = ({ message, author }: CardDepositionsType) => {
  return (
    <S.Container>
      <S.Message>{`"${message}"`}</S.Message>
      <S.Author>{author}</S.Author>
    </S.Container>
  );
};
