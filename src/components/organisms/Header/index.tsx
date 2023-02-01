// Libs
import React from "react";
import Link from "next/link";

// Hooks
import { useValidateScroll } from "@/hooks/useValidateScroll";

// Atoms
import { Button, Logo } from "@/components/atoms";

// Styles
import * as S from "./styles";

export const Header = () => {
  const sticky = useValidateScroll();

  return (
    <S.Container isFixed={sticky}>
      <S.Wrapper>
        <Link href="/">Company Board</Link>
        <Logo />
        <Button label="Solicitar orçamento" isIcon disabled />
      </S.Wrapper>
    </S.Container>
  );
};
