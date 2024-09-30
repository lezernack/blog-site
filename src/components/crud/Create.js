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
import useAuth from "../../firebase/hooks/useAuth";
import { createBlog } from "./Crud.js";

const CreateBlog = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();
  const { isLoggedIn, user } = useAuth();

  const handleCreateBlog = async () => {
    /* if (!isLoggedIn) {
            toast({
                title: "You must be logged in to create a blog",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            return;
        }*/
    setIsLoading(true);
    const blog = {
      title,
      description,
      status,
      userId: user.uid,
    };
    await createBlog(blog);
    setIsLoading(false);
    setTitle("");
    setDescription("");
    setStatus("pending");
    toast({ title: "blog created successfully", status: "success" });
  };
};
