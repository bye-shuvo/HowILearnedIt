import { createBrowserRouter } from "react-router-dom";
import Articles from "../Archive/Archive.tsx";
import Home from "../Home/Home.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
]);
