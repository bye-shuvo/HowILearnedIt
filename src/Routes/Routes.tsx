import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Articles from "../Articles/Articles.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
]);
