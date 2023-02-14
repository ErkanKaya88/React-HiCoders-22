import React from "react";
import { render, screen } from "@testing-library/react";
import IsDoneTitle from "../IsDoneTitle";

test("IsDoneTitle", () => {
  render(<IsDoneTitle />);
  expect(screen.getByText("IS DONE")).toBeInTheDocument();
});
