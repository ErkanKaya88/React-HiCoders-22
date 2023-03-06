import React from "react";
import { render, screen } from "@testing-library/react";
import TodoTitle from "../TodoTitle";

test("TodoTitle", () => {
  render(<TodoTitle />);
  expect(screen.getByText("TODO LIST")).toBeInTheDocument();
});
