import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;
