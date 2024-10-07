import React, { useState } from "react";
import "../css/global.css";
import "../css/blogSection.css";
import CommentSection from "./CommentSection";
import { Container } from "@chakra-ui/react";
import AddTodo from "../controllers/Create";
import TodoList from "../controllers/blogList";

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
        <Container maxW="7x1">
          {<AddTodo />}
          {<TodoList />}
        </Container>
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
