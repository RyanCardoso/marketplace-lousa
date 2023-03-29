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

const Menu = ({ onClick }: { onClick?: () => void }) => (
  <S.Menu>
    {menuItems.map((menuItem) => (
      <li key={menuItem.label} onClick={onClick}>
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

  const handleCloseMenu = () => {
    setIsOpen(false);
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
          <Menu onClick={handleCloseMenu} />
          <Button label="Solicitar orçamento" isIcon />
        </S.Content>
      </S.Dropdown>
    </S.Container>
  );
};
