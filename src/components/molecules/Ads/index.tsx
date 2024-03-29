// Libs
import React from "react";

// Atoms
import { Button } from "@/components/atoms";

// Utils
import { handleRedirectWhatsapp } from "@/utils/send-product-whatsapp";

// Styles
import * as S from "./styles";

export const Ads = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h4>Interessado em algum dos nossos serviços?</h4>
        <Button
          width="284px"
          height="52px"
          label="Solicitar orçamento pelo Whatsapp"
          backgroundColor="#25D366"
          onClick={handleRedirectWhatsapp}
        />
      </S.Wrapper>
    </S.Container>
  );
};
