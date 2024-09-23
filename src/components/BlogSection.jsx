import React from "react";
import "../css/global.css";
import "../css/blogSection.css";
import CommentSection from "./CommentSection";

const BlogSection = () => {
  return (
    <div>
      <form>
        <article className="header">
          <input className="title" type="text" placeholder="title" />
        </article>

        <div className="dscrptDiv">
          <input className="dscrpt" type="text" placeholder="Description" />
        </div>

        <div className="imgDiv">
          <input className="img" type="image" placeholder="image" />
        </div>
        <div className="btns">
          <button className="Cbtn">Create</button>
          <button className="Ebtn">Edit</button>
          <button className="Dbtn">Delete</button>
        </div>
      </form>
      <CommentSection />
    </div>
  );
};

export default BlogSection;
