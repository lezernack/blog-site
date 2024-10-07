import React, { useState } from "react";
import "../css/global.css";
import "../css/commentSection.css";
import { Container } from "@chakra-ui/react";
import CreateComment from "../controllers/Create";
import CommentList from "../controllers/commentList";

function CommentSection() {
  return (
    <Container maxW="7x1">
      {<CreateComment />}
      {<CommentList />}
    </Container>
  );
}

export default CommentSection;
