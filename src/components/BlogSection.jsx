import React from "react";
import "../css/global.css";
import "../css/blogSection.css";
import CommentSection from "./CommentSection";

const BlogSection = () => {
  return (
    <div>
      <form>
        <div className="blog">
          <article className="header">
            <input className="title" type="text" placeholder="title" />
          </article>

          <div className="dscrptDiv">
            <input className="dscrpt" type="text" placeholder="Description" />
          </div>
        </div>
        <div className="btns">
          <button className="Cbtn" onClick={Create}>
            Create
          </button>
          <button className="Ebtn" onClick={Edit}>
            Edit
          </button>
          <button className="Dbtn" onClick={Delete}>
            Delete
          </button>
        </div>
      </form>
      <br />
      <CommentSection />
    </div>
  );
};

function Create(e) {
  e.preventDefault();
  console.log("Create is working");
}

function Edit(e) {
  e.preventDefault();
  console.log("Edit is working");
}

function Delete(e) {
  e.preventDefault();
  console.log("Delete is working");
}

export default BlogSection;
