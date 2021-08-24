import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { TodoProvider } from "./hooks/useTodos";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
