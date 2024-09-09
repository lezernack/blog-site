import React from "react";
import "../css/global.css";
import "../css/Section.css";
import Navbar from "./Navbar";

const Section1 = () => {
  return (
    <div>
      <div className="header">
        <input className="title" type="text" placeholder="Section1" />
      </div>
      <div className="section">
        <div>
          <input
            className="list"
            name="section1"
            type="text"
            placeholder="Placeholder"
          />
        </div>
        <div className="dscrptDiv">
          <input className="dscrpt" type="text" placeholder="Description" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
