import React from "react";
import { H1 } from "./styled";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => <H1>{title}</H1>;
