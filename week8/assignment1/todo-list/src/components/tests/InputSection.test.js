import React from "react";
import { render, screen } from "@testing-library/react";
import InputSection from "../InputSection";

test("Add a Task", () => {
  render(<InputSection />);
  expect(screen.getByText("Add Todo")).toBeInTheDocument();
});
