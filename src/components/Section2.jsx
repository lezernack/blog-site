import React from "react";
import "../css/global.css";
import "../css/Section.css";
import Navbar from "./Navbar";

const Section2 = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <h1>Section2</h1>
      </div>
      <div className="section">
        <div className="list">
          <ul>
            <li>h</li>
            <br />
            <li>h</li>
            <br />
            <li>h</li>
            <br />
          </ul>
        </div>
        <div className="dscrptDiv">
          <h2 className="dscrpt">words</h2>
          <h2 className="dscrpt">wprds</h2>
          <h2 className="dscrpt">words</h2>
        </div>
      </div>
    </div>
  );
};

export default Section2;
