import React from "react";
import { render } from "@testing-library/react";
import CustomNavbar from "../components/CustomNavbar";

describe("Navbar component", () => {
  //   it("renders Navbar", () => {
  //     const { getByTestId } = render(<CustomNavbar />);
  //     const navbar = getByTestId("navbar");
  //     expect(navbar).toBeInTheDocument();
  //   });
  it("renders home link", () => {
    const { getByText } = render(<CustomNavbar />);
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });
  it("renders Teacher link", () => {
    const { getByText } = render(<CustomNavbar />);
    const teacherLink = getByText("Teacher");
    expect(teacherLink).toBeInTheDocument();
  });
  it("renders student link", () => {
    const { getByText } = render(<CustomNavbar />);
    const studentLink = getByText("Student");
    expect(studentLink).toBeInTheDocument();
  });
  it("renders about  link", () => {
    const { getByText } = render(<CustomNavbar />);
    const aboutLink = getByText("About");
    expect(aboutLink).toBeInTheDocument();
  });
});
