// Libs
import React, { useState } from "react";
import Link from "next/link";

// Hooks
/* import { useValidateScroll } from "@/hooks/useValidateScroll"; */

// Atoms
import { Burger, Button, Logo } from "@/components/atoms";

// Styles
import * as S from "./styles";

const Menu = () => (
  <S.Menu>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/servicos-de-reforma">Serviços de reforma</Link>
    </li>
    <li>
      <Link href="/quem-somos">Quem somos</Link>
    </li>
  </S.Menu>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* const sticky = useValidateScroll(); */

  return (
    <S.Container isFixed={false}>
      <S.Wrapper>
        <Menu />

        <Logo />

        <Button label="Solicitar orçamento" isIcon />
        <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </S.Wrapper>

      <S.Dropdown isOpen={isOpen}>
        <S.Content>
          <Menu />
          <Button label="Solicitar orçamento" isIcon />
        </S.Content>
      </S.Dropdown>
    </S.Container>
  );
};
