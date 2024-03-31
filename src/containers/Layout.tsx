import React, { useEffect, useState } from "react";
import { HeaderBar } from "../components/Header";
import { CardList } from "../components/CardList";
import axios from "axios";
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
interface DataState {
  hasHeadLine: Trip[];
  hasNoHeadLine: Trip[];
}

export const Layout = () => {
  const [data, setData] = useState<DataState>({
    hasHeadLine: [],
    hasNoHeadLine: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("data.json");
        const { featuredMultiMarket, multiMarket } = response.data.destinations;
        const hasHeadLine = featuredMultiMarket.filter((f) => f.headLine);
        const hasNoHeadLine = multiMarket.filter((f) => !f.headLine);
        setData({ hasHeadLine, hasNoHeadLine });
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getData();
  }, []);

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <HeaderBar title="Exoticca" />
      <div style={divStyle}>
        <CardList
          hasHeadLine={data.hasHeadLine}
          hasNoHeadLine={data.hasNoHeadLine}
        />
      </div>
    </>
  );
};
