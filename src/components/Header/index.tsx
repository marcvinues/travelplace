import React from "react";
import { Title } from "./Title";
import { Header, HeaderTitle } from "./styled";

export const HeaderBar = ({ title }: string) => {
  return (
    <Header>
      <HeaderTitle>
        <Title title={title} />
      </HeaderTitle>
    </Header>
  );
};
