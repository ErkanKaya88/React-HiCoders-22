import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Teachers from "../Teachers";
import "@testing-library/jest-dom";

test("Teacher Page rendered", () => {
  const { getByText } = render(<Teachers />);
  const teacherText = getByText("Teacher Component");
  expect(teacherText).toBeInTheDocument();
});
