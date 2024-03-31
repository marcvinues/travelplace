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
  CardContentPrices,
  CardPriceDiscount,
  CardPriceSubtitle,
  CardPriceTotal,
  CardButtonTrip,
  CardAlias,
  CardContentAlias,
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
            <CardContentPrices>
              <div>
                <CardDetailTitleDescription>
                  South Africa, Zimbabwe & Botswana + days
                </CardDetailTitleDescription>
                <CardDetailTitle>
                  Cape, Kruger, Victoria Falls & Chobe N.P. (title)
                </CardDetailTitle>
                <CardContent>
                  <CardContentDetail>
                    <ul>
                      {Object.entries(includes).map(([key, value]) => (
                        <li key={key}>{value}</li>
                      ))}
                    </ul>
                  </CardContentDetail>
                  <CardContentDetail>
                    <ul>
                      {Object.entries(includes).map(([key, value]) => (
                        <li key={key}>{value}</li>
                      ))}
                    </ul>
                  </CardContentDetail>
                </CardContent>
                <CardContentAlias>
                  <CardAlias>
                    <CardContentDetail>group tours</CardContentDetail>
                  </CardAlias>
                  <CardAlias>
                    <CardContentDetail>group tours</CardContentDetail>
                  </CardAlias>
                  <div>
                    <CardButtonTrip>See trip</CardButtonTrip>
                  </div>
                </CardContentAlias>
              </div>
              <div>
                <CardPriceDiscount> - 40%</CardPriceDiscount>
                <CardPriceSubtitle> From $6349</CardPriceSubtitle>
                <CardPriceTotal> $3799</CardPriceTotal>
                <CardPriceSubtitle> Per night $210</CardPriceSubtitle>
              </div>
            </CardContentPrices>
          </CardDetails>
        </CardItem>
      </CardSection>
    </CardContainer>
  );
};
