import React from "react";
import "../css/Global";
import "../css/BlogSection";

const createBlog = async (req, res) => {
  return (
    <div>
      <form>
        <div className="header">
          <input className="title" type="text" placeholder="Section1" />
        </div>
        <div className="section">
          <div className="dscrptDiv">
            <input className="dscrpt" type="text" placeholder="paragraph" />
          </div>
        </div>
        <div className="btns">
          <button className="Cbtn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default createBlog;
