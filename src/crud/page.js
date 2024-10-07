import { Container } from "@chakra-ui/react";
import CreateComment from "../controllers/Create";
import CommentList from "../controllers/commentList";

export default function Home() {
  return (
    <Container maxW="7x1">
      {<CreateComment />}
      {<CommentList />}
    </Container>
  );
}
