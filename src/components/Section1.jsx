import React from "react";
import "../css/global.css";
import "../css/Section.css";
import Navbar from "./Navbar";

const Section1 = () => {
  return (
    <div>
      <form>
        <div className="header">
          <input className="title" type="text" placeholder="Section1" />
        </div>
        <div className="section">
          <form>
            <input
              className="list"
              name="section1"
              type="text"
              placeholder="Placeholder"
            />
          </form>
          <div className="dscrptDiv">
            <input className="dscrpt" type="text" placeholder="Description" />
          </div>
        </div>
        <div className="btns">
          <button className="Cbtn">Create</button>
          <button className="Ebtn">Edit</button>
          <button className="Dbtn">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default Section1;
