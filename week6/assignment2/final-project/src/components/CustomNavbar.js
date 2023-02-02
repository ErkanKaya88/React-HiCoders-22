import React, { useState } from "react";
import Logo from "../img/Logo.png";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  NavbarBrand,
} from "reactstrap";

const CustomNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <>
      <Nav tabs className="bg-danger">
        <NavbarBrand className="me-3" href="/">
          <img
            className="p-1"
            alt="logo"
            src={Logo}
            style={{
              height: 40,
              width: 50,
            }}
          />
        </NavbarBrand>
        <NavItem>
          <NavLink className="text-light" href="home">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="features">
            Features
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="about">
            About
          </NavLink>
        </NavItem>
        <Dropdown className="ms-auto" nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className="text-light">
            Log In
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="login">Teacher</DropdownItem>
            <DropdownItem href="login">Student</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="login">Admin</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </>
  );
};

export default CustomNavbar;
