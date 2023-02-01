// Libs
import React from "react";
import Link from "next/link";

// Hooks
import { useValidateScroll } from "@/hooks/useValidateScroll";

// Styles
import * as S from "./styles";

export const Header = () => {
  const sticky = useValidateScroll();

  return (
    <S.Container isFixed={sticky}>
      <S.Wrapper>
        <Link href="/">Company Board</Link>
      </S.Wrapper>
    </S.Container>
  );
};
