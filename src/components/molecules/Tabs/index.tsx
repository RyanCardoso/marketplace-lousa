// Libs
import React, { useState } from "react";

// Styles
import * as S from "./styles";

interface TabsType {
  items: string[];
  onChangeTab?: (value: number) => void;
}

export const Tabs = ({ items, onChangeTab }: TabsType) => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <S.Container>
      {items?.map((i, index) => (
        <S.Item
          key={index}
          active={current === index}
          onClick={() => {
            onChangeTab?.(index);
            setCurrent(index);
          }}
        >
          {i}
        </S.Item>
      ))}
    </S.Container>
  );
};
