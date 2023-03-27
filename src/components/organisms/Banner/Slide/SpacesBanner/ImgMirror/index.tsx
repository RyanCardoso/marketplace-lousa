// Libs
import React from "react";
import Image from "next/image";

// Styles
import * as S from "./styles";

export const ImgMirror = () => {
  return (
    <S.Container>
      <Image src="/images/vidros_banner.png" alt="Banheiro com vidros." width="400" height="299" />
    </S.Container>
  );
};
