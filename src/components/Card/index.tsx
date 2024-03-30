import React from "react";
import {
  CardContainer,
  CardItem,
  CardImage,
  CardSection,
  CardTitle,
  CardDetails,
  CardDetailTitleDescription,
  CardDetailTitle,
  CardContent,
  CardContentDetail,
} from "./styled";

export const Card = ({
  promoted,
  images,
  tags,
  highlights,
  title,
  priceDetail,
  days,
  destination,
  hasPrivateTour,
}) => {
  const includes = {
    ACCOMMODATION: "Accomodation",
    ALL_FLIGHTS: "All Flights",
    ALL_TRANSFERS: "All Transfers",
    SOME_MEALS: "Some Meals",
    ACTIVITIES: "Activities",
  };
  // tags = alias
  const promotedText =
    "Our recommendation to visit Botswana and neighboring countries";
  const notPromoted = "Multi country vacation packages including Botswana";

  return (
    <CardContainer>
      <CardSection>
        {promoted ? <CardTitle>{promotedText}</CardTitle> : notPromoted}
        <CardItem>
          <CardImage src={images[0].desktop} />
          <CardDetails>
            <CardDetailTitleDescription>
              South Africa, Zimbabwe & Botswana + days
            </CardDetailTitleDescription>
            <CardDetailTitle>
              Cape, Kruger, Victoria Falls & Chobe N.P. (title)
            </CardDetailTitle>
            <CardContent>
              <CardContentDetail>Chobe</CardContentDetail>
              <CardContentDetail>
                {Object.entries(includes).map(([key, value]) => (
                  <span key={key}>{value}</span>
                ))}
              </CardContentDetail>
            </CardContent>
          </CardDetails>
        </CardItem>
      </CardSection>
    </CardContainer>
  );
};
