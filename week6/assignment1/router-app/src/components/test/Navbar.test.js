import { render, screen } from "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";
import "@testing-library/jest-dom";

test("Navbar Component render", () => {
  render(<Navbar />, { wrapper: MemoryRouter });
});
test("Navbar Component inhalt", () => {
  render(<Navbar />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Home/i, /Student/i, /Teacher/i);
  expect(linkElement).toBeInDocument();
});

// import React from "react";
// import { render } from "@testing-library/react";
// import Navbar from "../Navbar";

// describe("Navbar component", () => {
//   it("renders Navbar", () => {
//     const { getByTestId } = render(<Navbar />);
//     const navbar = getByTestId("navbar");
//     expect(navbar).toBeInTheDocument();
//   });
//   it("renders home link", () => {
//     const { getByText } = render(<Navbar />);
//     const homeLink = getByText("Home");
//     expect(homeLink).toBeInTheDocument();
//   });
//   it("renders teacher link", () => {
//     const { getByText } = render(<Navbar />);
//     const teacherLink = getByText("Teacher");
//     expect(teacherLink).toBeInTheDocument();
//   });
//   it("renders student link", () => {
//     const { getByText } = render(<Navbar />);
//     const studentLink = getByText("Student");
//     expect(studentLink).toBeInTheDocument();
//   });
// });
