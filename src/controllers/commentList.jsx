"use client";

import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  Input,
  useToast,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuth from "../firebase/hooks/useAuth.js";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/index.js";
import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { deleteComment, toggleCommentStatus } from "../crud/api/comment.js";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [editComment, setEditComments] = useState(null);
  const { user } = useAuth();
  const toast = useToast();

  const refreshData = () => {
    if (!user) {
      setComments([]);
      return;
    }
    const q = query(collection(db, "comment"), where("user", "==", user.uid));
    onSnapshot(q, (querySnapshot) => {
      const ar = [];
      querySnapshot.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setComments(ar);
    });
  };

  useEffect(() => {
    refreshData();
  }, [user]);

  const handleCommentDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      deleteComment(id);
      toast({ title: "comment deleted successfully", status: "success" });
    }
  };

  const handleEditComment = (comments) => {
    setEditComments({ ...comments });
  };

  const handleUpdate = async () => {
    if (!editComment) return;

    await updateDoc(doc(db, "comment", editComment.id), {
      title: editComment.title,
      description: editComment.description,
    });

    toast({ title: "comment updated successfully", status: "success" });
    setEditComments(null);
    refreshData();
  };

  return (
    <Box mt={5}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {comments.map((comment) => (
          <Box
            key={comment.id}
            p={3}
            boxShadow="2x1"
            shadow={"dark-lg"}
            transition="0.2s"
            _hover={{ boxShadow: "sm" }}
          >
            <Heading as="h3" fontSize={"xl"}>
              <Badge
                color="red.500"
                bg="inherit"
                transition={"0.2s"}
                _hover={{
                  bg: "inherit",
                  transform: "scale(1.2)",
                }}
                float="right"
                size="xs"
                onClick={() => handleCommentDelete(comment.id)}
              >
                <FaTrash />
              </Badge>

              {editComment && editComment.id === comment.id ? (
                <Box>
                  <Text>Comment</Text>
                  <Input
                    type="text"
                    value={editComment.title}
                    onChange={(e) =>
                      setEditComments({ ...editComment, title: e.target.value })
                    }
                  />
                </Box>
              ) : (
                <Text>{comment.title}</Text>
              )}
            </Heading>

            {editComment && editComment.id === comments.id ? (
              <Box>
                <Text>Description</Text>
                <Textarea
                  type="text"
                  value={editComment.description}
                  onChange={(e) =>
                    setEditComments({
                      ...editComment,
                      description: e.target.value,
                    })
                  }
                />
              </Box>
            ) : (
              <Text>{comment.description}</Text>
            )}
            {editComment && editComment.id === comments.id ? (
              <Button onClick={handleUpdate} colorScheme="blue">
                Save
              </Button>
            ) : (
              <Button
                onClick={() => handleEditComment(comment)}
                variant="solid"
                colorScheme="purple"
              >
                Edit
              </Button>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CommentList;
