import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

test("Home Page rendered", () => {
  render(<Home />);
  const homeLink = getByText("Home");
  expect(homeLink).toBeInTheDocument();
});
