import React from "react";
import { Title } from "./Title";
import { Header, HeaderTitle } from "./styled";
interface HeaderBarProps {
  title: string;
}

export const HeaderBar = ({ title }: HeaderBarProps) => {
  return (
    <Header>
      <HeaderTitle>
        <Title title={title} />
      </HeaderTitle>
    </Header>
  );
};
