import { createBrowserRouter } from "react-router-dom";
import Articles from "../Archive/Archive.tsx";
import Home from "../Home/Home.tsx";
import Admin from "../Admin/Admin.tsx";
import Create from "../Admin/Create.tsx";
import Article from "../Article/Article.tsx";
import Dashboard from "../Admin/Dashboard/Dashboard.tsx";
import Login from "../Admin/Login.tsx";
import Signup from "../Admin/Signup.tsx";

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
    children:[{
      path:"/admin/dashboard",
      element:<Dashboard />
    } ,
  {
    path:"/admin/Create",
    element:<Create />
  },
{
  path:"/admin/login",
  element:<Login />
},
{
  path:"/admin/signup",
  element: <Signup />
}]
  },
]);
