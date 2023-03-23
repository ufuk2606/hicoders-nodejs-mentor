import React from "react";
//import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsContextProvider from "./contexts/PostsContext";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Posts from "./pages/Posts";
import PostById from "./pages/PostById";

const router = createBrowserRouter([
  { path: `/`, element: <App /> },
  { path: `/`, element: <Home /> },
  { path: `/posts`, element: <Posts /> },
  { path: `/posts/:id`, element: <PostById /> },
  { path: `/create`, element: <Create /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostsContextProvider>
      <RouterProvider router={router} />
    </PostsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
