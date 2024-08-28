import React from "react";
import "../css/global.css";
import "../css/Section.css";
import Navbar from "./Navbar";

const Section1 = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <h1>Section1</h1>
      </div>
      <div className="section">
        <div className="list">
          <ul>
            <li>h</li>
            <br />
            <li>h</li>
          </ul>
        </div>
        <div className="dscrptDiv">
          <h2 className="dscrpt">words</h2>
          <h2 className="dscrpt">words</h2>
        </div>
      </div>
    </div>
  );
};

export default Section1;
