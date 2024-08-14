import React from "react";
import "../css/global.css";
import "../css/navbar.css";

const navbar = () => {
  return (
    <ul className="Navbar">
      <li className="Navbar-li">Blog</li>
      <li className="Navbar-li">About</li>
      <li className="Navbar-li">Others</li>
    </ul>
  );
};

export default navbar;
