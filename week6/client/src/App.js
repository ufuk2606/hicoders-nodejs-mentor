import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Settings from "./components/Settings";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/post/:postId",
    element: <SinglePost />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
