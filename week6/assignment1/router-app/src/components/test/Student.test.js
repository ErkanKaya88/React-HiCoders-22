import React from "react";
import { render } from "@testing-library/react";
import Students from "../Students";

test("Student Page rendered", () => {
  const { getByText } = render(<Students />);
  expect(getByText("Student Component")).toBeInTheDocument();
});
