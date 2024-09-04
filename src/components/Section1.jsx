import React from "react";
import "../css/global.css";
import "../css/Section.css";
import Navbar from "./Navbar";

const Section1 = () => {
  return (
    <div>
      <div className="header">
        <input
          className="header"
          type="text"
          placeholder="Section1"
          id="title"
        />
      </div>
      <div className="section">
        <ul>
          <li>
            <input
              className="list"
              name="section1"
              type="text"
              placeholder="Placeholder"
            />
          </li>
        </ul>
        <div className="dscrptDiv">
          <input className="dscrpt" type="text" placeholder="Description" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
