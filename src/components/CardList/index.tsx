import React from "react";
import { Card } from "../Card/";

interface Trip {
  headLine?: boolean;
  images: { desktop: string }[];
  tags: { alias: string; name: string }[];
  highlights: { title: string }[];
  title: string;
  priceDetail: {
    pricingPercentage?: number;
    oldPriceBeautify?: string;
    fromPriceBeautify?: string;
    pricePerNight?: string;
  };
  days: number;
  destination: string;
  hasPrivateTour?: boolean;
}

interface CardListProps {
  hasHeadLine: Trip[];
  hasNoHeadLine: Trip[];
}

export const CardList = ({ hasHeadLine, hasNoHeadLine }: CardListProps) => {
  const promotedText =
    "Our recommendation to visit Botswana and neighboring countries";
  const notPromoted = "Multi country vacation packages including Botswana";

  const renderTrips = (trips: Trip[]) => (
    <>
      {trips.map((t, index) => (
        <Card
          key={t.destination}
          headLine={t.headLine}
          images={t.images}
          tags={t.tags}
          highlights={t.highlights}
          title={t.title}
          priceDetail={t.priceDetail}
          days={t.days}
          destination={t.destination}
          isFirst={index === 0}
          promotedText={promotedText}
          notPromoted={notPromoted}
        />
      ))}
    </>
  );
  return (
    <div>
      {renderTrips(hasHeadLine, true)}
      {renderTrips(hasNoHeadLine, false)}
    </div>
  );
};
