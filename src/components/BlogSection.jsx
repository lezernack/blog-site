import React, { useState } from "react";
import "../css/global.css";
import "../css/blogSection.css";
import CommentSection from "./CommentSection";

const BlogSection = () => {
  let [titleInputValue, setTitleInputValue] = useState("");

  let [bodyInputValue, setBodyInputValue] = useState("");

  function handleTitleInputChange(e) {
    setTitleInputValue(e.target.value);
  }

  function handleBodyInputChange(e) {
    setBodyInputValue(e.target.value);
  }

  function Create(e) {
    e.preventDefault();
    console.log(`${titleInputValue}`);
    console.log(`${bodyInputValue}`);
  }

  function Edit(e) {
    e.preventDefault();
    console.log("Edit is working");
  }

  function Delete(e) {
    e.preventDefault();
    console.log("Delete is working");
  }

  return (
    <div>
      <form>
        <div className="blog">
          <article className="header">
            <input
              className="title"
              type="text"
              placeholder="title"
              value={titleInputValue}
              onChange={handleTitleInputChange}
            />
          </article>

          <div className="dscrptDiv">
            <input
              className="dscrpt"
              type="text"
              placeholder="Description"
              value={bodyInputValue}
              onChange={handleBodyInputChange}
            />
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

export default BlogSection;
