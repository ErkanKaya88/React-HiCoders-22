import React from "react";
import { render } from "@testing-library/react";
import Features from "../pages/Features";

test("Features Page rendered", () => {
  const { getByText } = render(<Features />);
  expect(getByText("Features")).toBeInTheDocument();
});
