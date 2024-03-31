import React from "react";
import { Card } from "../Card/";

export const CardList = ({ hasHeadLine, hasNoHeadLine }) => {
  const promotedText =
    "Our recommendation to visit Botswana and neighboring countries";
  const notPromoted = "Multi country vacation packages including Botswana";

  const renderTrips = (trips) => (
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
          hasPrivateTour={t.hasPrivateTour}
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
