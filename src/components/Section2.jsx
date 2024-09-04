import React from "react";
import "../css/global.css";
import "../css/Section.css";
import Navbar from "./Navbar";

const Section2 = () => {
  return (
    <div>
      <div className="header">
        <input
          className="header"
          name="title"
          type="text"
          placeholder="Section2"
          id="title"
        />
      </div>
      <div className="section">
        <div>
          <ul>
            <li>
              <input
                className="list"
                name="section2"
                type="text"
                placeholder="Placeholder"
              />
            </li>
          </ul>
        </div>
        <div className="dscrptDiv">
          <input className="dscrpt" type="text" placeholder="Description" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
