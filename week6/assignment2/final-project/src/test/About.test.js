import React from "react";
import { render } from "@testing-library/react";
import About from "../pages/About";

test("About Page rendered", () => {
  const { getByText } = render(<About />);
  expect(getByText("Schule")).toBeInTheDocument();
});
