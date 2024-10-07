"use client";
import React from "react";
import "../css/global.css";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Auth from "../firebase/Auth";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="Navbar">
          <Link className="Navbar-li" to="/blog">
            Blog
          </Link>
          <Link className="Navbar-li" to="/">
            Home
          </Link>
          <Link className="Navbar-li" to="/pictures">
            Pictures
          </Link>

          <Auth />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
