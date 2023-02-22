import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon";
import { DataContext } from "../context/DataContext";

const Navbar = () => {
  const { selected, setSelected } = useContext(DataContext);

  const navCount = selected.reduce(
    (total, currentItem) => (total += currentItem.count),
    0
  );
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  <CartIcon />
                  <span style={{ fontSize: "20px" }} className="mx-0">
                    {navCount}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
