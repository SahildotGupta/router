import React from "react";
import logo from "../logo.svg";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a classclassName="navbar-brand ml4" href="#">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "35px",
            marginLeft: "30px",
            paddingBottom: "5px",
            color: "black",
          }}
        ></img>
      </a>
      <i class="fab fa-acquisitions-incorporated"></i>

      <div
        className="navbar collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active ">
            <NavLink className="nav" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item active ">
            <NavLink className="nav" to="/about">
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
