import React from "react";
import "../css/global.css";
import "../css/blogSection.css";
import Navbar from "./Navbar";

const BlogSection = () => {
  return (
    <div>
      <form>
        <div className="header">
          <input className="title" type="text" placeholder="title" />
        </div>

        <div className="dscrptDiv">
          <input className="dscrpt" type="text" placeholder="Description" />
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

export default BlogSection;
