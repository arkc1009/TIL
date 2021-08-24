import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {
      setTodos((prevTodos) => [...todos, data.data]);
    });
  }, []);

  return (
    <Context.Provider
      value={todos}
    >
      {children}
    </Context.Provider>
  );
};

const useTodos = () => useContext(Context);

export default useTodos;
