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
  CardContainerButton,
} from "./styled";

export const Card = ({
  headLine,
  images,
  tags,
  highlights,
  title,
  priceDetail,
  days,
  destination,
  isFirst,
  promotedText,
  notPromoted,
}) => {
  const includes = {
    ACCOMMODATION: "Accomodation",
    ALL_FLIGHTS: "All Flights",
    ALL_TRANSFERS: "All Transfers",
    SOME_MEALS: "Some Meals",
    ACTIVITIES: "Activities",
  };
  // tags = alias

  return (
    <CardContainer>
      <CardSection>
        {isFirst && (
          <CardTitle>{headLine ? promotedText : notPromoted}</CardTitle>
        )}
        <CardItem>
          <CardImage src={images[0].desktop} />
          <CardDetails>
            <CardContentPrices>
              <div>
                <CardDetailTitleDescription>
                  {destination} in {days} days +
                </CardDetailTitleDescription>
                <CardDetailTitle>{title}</CardDetailTitle>
                <CardContent>
                  <CardContentDetail>
                    <ul>
                      {highlights &&
                        highlights.map((value) => (
                          <li key={value.title}>{value.title}</li>
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
                  {tags.map((tag) => (
                    <CardAlias key={tag.alias}>
                      <CardContentDetail>{tag.name}</CardContentDetail>
                    </CardAlias>
                  ))}
                  <CardContainerButton>
                    <CardButtonTrip>See trip</CardButtonTrip>
                  </CardContainerButton>
                </CardContentAlias>
              </div>
              <div>
                <CardPriceDiscount>
                  -{priceDetail?.pricingPercentage}%
                </CardPriceDiscount>
                <CardPriceSubtitle>
                  From {priceDetail?.oldPriceBeautify}
                </CardPriceSubtitle>
                <CardPriceTotal>
                  {priceDetail?.fromPriceBeautify}
                </CardPriceTotal>
                <CardPriceSubtitle>
                  Per night {priceDetail?.pricePerNight}
                </CardPriceSubtitle>
              </div>
            </CardContentPrices>
          </CardDetails>
        </CardItem>
      </CardSection>
    </CardContainer>
  );
};
