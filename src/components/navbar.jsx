import React, { useState } from "react";
import "../css/global.css";
import "../css/navbar.css";

const Navbar = () => {
  const [setNavbarOpen, navbarOpen] = useState(false);

  return (
    <nav>
      <ul className="Navbar">
        <li className="Navbar-li">VideoGames</li>
        <li className="Navbar-li">Home</li>
        <li className="Navbar-li">Books</li>
      </ul>
    </nav>
  );
};

export default Navbar;
