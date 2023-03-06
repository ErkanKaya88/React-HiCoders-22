import React from "react";
import { render, screen } from "@testing-library/react";
import Students from "../Students";

test("Student Page rendered", () => {
  render(<Students />);
  expect(screen.getByText("Student List:")).toBeInTheDocument();
});
