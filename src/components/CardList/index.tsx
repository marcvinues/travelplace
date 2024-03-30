import React from "react";
import { Card } from "../Card/";

export const CardList = ({ data }) => {
  const {
    isPromoted,
    images,
    tags,
    highlights,
    title,
    priceDetail,
    days,
    destination,
  } = data?.destinations.featuredMultiMarket[0];
  console.log("CARDLIST", data?.destinations.featuredMultiMarket[0]);
  return <Card promoted={isPromoted} images={images} />;
};
