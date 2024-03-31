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

interface Tag {
  alias: string;
  name: string;
}

interface Highlight {
  title: string;
}

interface Image {
  desktop: string; // Ajusta según la estructura real de tus imágenes
}

interface PriceDetail {
  pricingPercentage?: number;
  oldPriceBeautify?: string;
  fromPriceBeautify?: string;
  pricePerNight?: string;
}

interface CardProps {
  headLine?: boolean;
  images: Image[];
  tags: Tag[];
  highlights: Highlight[];
  title: string;
  priceDetail: PriceDetail;
  days: number;
  destination: string;
  isFirst?: boolean;
  promotedText: string;
  notPromoted: string;
}

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
}: CardProps) => {
  const includes = {
    ACCOMMODATION: "Accomodation",
    ALL_FLIGHTS: "All Flights",
    ALL_TRANSFERS: "All Transfers",
    SOME_MEALS: "Some Meals",
    ACTIVITIES: "Activities",
  };

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
