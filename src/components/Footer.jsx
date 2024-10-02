import React, { useState } from "react";
import "../css/global.css";
import "../css/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <hr />
        &copy;<span> {new Date().getFullYear()} |</span> Email{" "}
        <span> | luks.ezck@gmail.com |</span>
        <br />
        Current Date:<span> {new Date().toLocaleDateString()} </span>
      </footer>
    </div>
  );
};

export default Footer;
