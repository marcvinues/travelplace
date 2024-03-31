import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardList } from "./CardList";

jest.mock("../Card", () => ({
  Card: ({ title }: { title: string }) => <div>{title}</div>,
}));

describe("CardList", () => {
  it("renders the promoted and not promoted trips correctly", () => {
    const hasHeadLine = [
      {
        destination: "Botswana",
        title: "Visit Botswana",
        images: [{ desktop: "image-url.jpg" }],
        tags: [{ alias: "TAG1", name: "Tag 1" }],
        highlights: [{ title: "Highlight 1" }],
        priceDetail: {
          pricingPercentage: 10,
          oldPriceBeautify: "$1000",
          fromPriceBeautify: "$900",
          pricePerNight: "$100",
        },
        days: 7,
        headLine: true,
      },
    ];

    const hasNoHeadLine = [
      {
        destination: "Zimbabwe",
        title: "Explore Zimbabwe",
        images: [{ desktop: "image-url.jpg" }],
        tags: [{ alias: "asdsd", name: "asdasd" }],
        highlights: [{ title: "Highlight 2" }],
        priceDetail: {
          pricingPercentage: 5,
          oldPriceBeautify: "$900",
          fromPriceBeautify: "$1760",
          pricePerNight: "$195",
        },
        days: 5,
      },
    ];

    render(
      <CardList hasHeadLine={hasHeadLine} hasNoHeadLine={hasNoHeadLine} />
    );

    expect(screen.getByText("Visit Botswana")).toBeInTheDocument();
    expect(screen.getByText("Explore Zimbabwe")).toBeInTheDocument();
  });
});
