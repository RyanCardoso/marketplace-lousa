// Libs
import React, { ReactNode } from "react";

// Organims
import { Footer, Header } from "@/components/organisms";

// Styles
import * as S from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Container>
  );
};
