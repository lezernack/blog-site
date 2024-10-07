"use client";

import React from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react";
import useAuth from "../firebase/hooks/useAuth.js";
import { addTodo } from "../api/todo.js";
import "../css/blogSection.css";

const AddTodo = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();
  const { isLoggedIn, user } = useAuth();

  const handleCreateBlog = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a blog",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    const todo = {
      title,
      description,
      status,
      userId: user.uid,
    };
    await addTodo(todo);
    setIsLoading(false);
    setTitle("");
    setDescription("");
    setStatus("pending");
    toast({ title: "blog created successfully", status: "success" });
  };

  return (
    <div>
      <form>
        <div className="blog">
          <article className="header">
            <Input
              className="title"
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </article>

          <div className="dscrptDiv">
            <Textarea
              className="dscrpt"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="btns">
          <Button
            className="Cbtn"
            onClick={() => handleCreateBlog()}
            disabled={title.length < 1 || description.length < 1 || isLoading}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
