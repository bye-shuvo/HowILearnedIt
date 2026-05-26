import { createBrowserRouter } from "react-router-dom";
import Articles from "../Archive/Archive.tsx";
import Home from "../Home/Home.tsx";
import Admin from "../Admin/Admin.tsx";
import Create from "../Admin/Create.tsx";
import Article from "../Article/Article.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/:slug",
    element: <Article />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/dashboard",
    element: <Admin />,
  },
  {
    path: "/admin/create",
    element: <Create />,
  },
]);
