import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import RouterProvider from "./components/router-provicder";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
);
