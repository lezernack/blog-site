import React, { useState } from "react";
import "../css/global.css";
import "../css/navbar.css";

const Navbar = () => {
  const [setNavbarOpen, navbarOpen] = useState(false);

  return (
    <nav>
      <ul className="Navbar">
        <li className="Navbar-li">Blog</li>
        <li className="Navbar-li">About</li>
        <li className="Navbar-li">Others</li>
      </ul>
    </nav>
  );
};

export default Navbar;
