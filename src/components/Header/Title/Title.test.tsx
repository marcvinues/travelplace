import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "./Title";

test("renders the title component with text", () => {
  render(<Title title="Hello, world!" />);
  const titleElement = screen.getByText(/hello, world!/i);
  expect(titleElement).toBeInTheDocument();
});
