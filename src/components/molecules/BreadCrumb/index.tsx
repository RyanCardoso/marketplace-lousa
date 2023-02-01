// Libs
import React from "react";
import Link from "next/link";

// Styles
import * as S from "./styles";

interface OptionDTO {
  path?: string;
  label: string;
}

interface BreadcrumbProps {
  options: OptionDTO[];
}

const handleIsLink = (op: OptionDTO) => {
  if (op.path) return <Link href={op.path}>{op.label}</Link>;
  return <p>{op.label}</p>;
};

export const Breadcrumb = ({ options }: BreadcrumbProps) => {
  return (
    <S.Container>
      <S.Title>{options[options.length - 1].label}</S.Title>
      <S.BoxItems>
        <S.Item>
          <Link href="/">Home</Link>
        </S.Item>
        {options.map((i) => (
          <S.Item key={i.path + i.label}>/ {handleIsLink(i)}</S.Item>
        ))}
      </S.BoxItems>
    </S.Container>
  );
};
