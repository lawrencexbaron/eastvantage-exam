import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Removed the .tsx extension
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/pages/User";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/users", element: <User /> },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
