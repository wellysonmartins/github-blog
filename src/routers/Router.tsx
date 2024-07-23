import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={routers} />;
};
