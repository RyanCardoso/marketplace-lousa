// Libs
import React from "react";
import Image from "next/image";

// Styles
import * as S from "./styles";

export const Logo = () => {
  return (
    <S.Container href="/">
      <S.Img src="./images/logo.svg" alt="logo company board" />
    </S.Container>
  );
};
