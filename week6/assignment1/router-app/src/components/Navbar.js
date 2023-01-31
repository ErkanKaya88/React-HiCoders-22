import React from "react";
import { NavLink } from "react-router-dom";
import HiCoders from "../img/HiCoders.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info ">
        <div className="container-fluid ps-5 ms-5">
          <NavLink className="navbar-brand ms-5 me-0" to="/home">
            <img src={HiCoders} className="w-75" />
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link active me-5 text-light"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink className="nav-link me-5 text-light" to="/teacher">
                Teacher
              </NavLink>
              <NavLink className="nav-link me-5 text-light" to="/student">
                Student
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
