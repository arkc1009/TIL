import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState({
    todo: [],
    length: 1,
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {
      setTodos((prevTodos) => ({
        todo: [...todos.todo, ...data.data],
        length: data.data.length,
      }));
    });
  }, [setTodos]);

  return <Context.Provider value={todos}>{children}</Context.Provider>;
};

const useTodos = () => useContext(Context);

export default useTodos;
