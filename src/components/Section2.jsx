import React from "react";
import "../css/global.css";
import "../css/Section.css";
import Navbar from "./Navbar";

const Section2 = () => {
  return (
    <div>
      <div className="header">
        <input className="title" type="text" placeholder="Section2" />
      </div>
      <div className="section">
        <div>
          <input
            className="list"
            name="section2"
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

export default Section2;
