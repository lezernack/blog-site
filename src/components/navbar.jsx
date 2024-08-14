import React, { useState } from "react";
import "../css/global.css";
import "../css/navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [setNavbarOpen, navbarOpen] = useState(false);

  return (
    <nav>
      <div className="bars">
        {!navbarOpen ? (
          <button onClick={() => setNavbarOpen(true)}>
            <Bars3Icon className="h-10 w-10" />
          </button>
        ) : (
          <button onClick={() => setNavbarOpen(false)}>
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <ul className="Navbar">
        <li className="Navbar-li">Blog</li>
        <li className="Navbar-li">About</li>
        <li className="Navbar-li">Others</li>
      </ul>
    </nav>
  );
};

export default Navbar;
