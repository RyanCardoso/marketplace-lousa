// Libs
import React, { useState } from "react";
import Link from "next/link";

// Atoms
import { Burger, Button, Logo } from "@/components/atoms";

// Styles
import * as S from "./styles";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Serviços de reforma", href: "/servicos-de-reforma" },
  { label: "Quem somos", href: "/quem-somos" },
];

const Menu = () => (
  <S.Menu>
    {menuItems.map((menuItem) => (
      <li key={menuItem.label}>
        <Link href={menuItem.href}>{menuItem.label}</Link>
      </li>
    ))}
  </S.Menu>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Menu />

        <Logo />

        <Button label="Solicitar orçamento" isIcon />
        <Burger onClick={handleIsOpen} isOpen={isOpen} />
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
