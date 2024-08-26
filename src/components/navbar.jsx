import React, { useState } from "react";
import "../css/global.css";
import "../css/navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [setNavbarOpen, navbarOpen] = useState(false);

  return (
    <nav>
      <div className="mobile-menu block md:hidden">
        {!navbarOpen ? (
          <button onClick={() => setNavbarOpen(true)}>
            <Bars3Icon className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" />
          </button>
        ) : (
          <button onClick={() => setNavbarOpen(false)}>
            <XMarkIcon className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" />
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
