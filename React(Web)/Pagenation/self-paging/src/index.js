import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { TodoProvider } from "./hooks/useTodos";
import { PageProvider } from "./hooks/usePages";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <PageProvider>
        <App />
      </PageProvider>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
