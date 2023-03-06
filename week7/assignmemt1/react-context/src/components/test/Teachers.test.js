import React from "react";
import { render, screen } from "@testing-library/react";
import Teachers from "../Teachers";

test("Teacher Page rendered", () => {
  render(<Teachers />);
  expect(screen.getByText("Teacher List:")).toBeInTheDocument();
});
