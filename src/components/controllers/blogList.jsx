"use client";

import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  useToast,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuth from "../../firebase/hooks/useAuth";
import {
  collection,
  onSnapShot,
  query,
  where,
  doc,
  updateDoc,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { deleteTodo, toggleTodoStatus } from ".../crud/Crud";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const { user } = useAuth();
  const toast = useToast();

  const refreshData = () => {
    if (!user) {
      setTodos([]);
      return;
    }
    const q = query(collection(db, "todo"), where("user", "==", user.uid));
    onSnapShot(q, (QuerySnapshot) => {
      const ar = [];
      QuerySnapshot.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setTodos(ar);
    });
  };
};
