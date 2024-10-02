import { Container } from "@chakra-ui/react";
import AddTodo from "../controllers/Create";
import TodoList from "../controllers/blogList";

export default function Home() {
  return (
    <Container maxW="7x1">
      {<AddTodo />}
      {<TodoList />}
    </Container>
  );
}
