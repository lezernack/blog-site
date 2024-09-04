"use client";
import React from "react";
import "../css/global.css";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="Navbar">
          <li className="Navbar-li">Section1</li>
          <li className="Navbar-li">Home</li>
          <li className="Navbar-li">Section2</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
