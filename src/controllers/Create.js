"use client";

import React from "react";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import useAuth from "../firebase/hooks/useAuth.js";
import { addComment } from "../crud/api/comment.js";
import "../css/commentSection.css";

const CreateComment = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();
  const { isLoggedIn, user } = useAuth();

  const handleCreateComment = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a comment",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    const comment = {
      title,
      status,
      description,
      userId: user.uid,
    };
    await addComment(comment);
    setIsLoading(false);
    setTitle("");
    setDescription("");
    setStatus("pending");
    toast({ title: "blog created successfully", status: "success" });
  };

  return (
    <div className="cntnr">
      <div className="cmnt-cntnr">
        <form className="cmnt-sctn">
          <Input
            className="cmnts"
            type="text"
            placeholder="Comment"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Button
            className="btn"
            onClick={() => handleCreateComment()}
            disabled={title.length < 1 || description.length < 1 || isLoading}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
export default CreateComment;
