import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

test("Home Page rendered", () => {
  const { getByText } = render(<Home />);
  const homeText = getByText("Home Component");
  expect(homeText).toBeInTheDocument();
});
