import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  location.state = true;

  if (location.state) return <Navigate to={"/admin"} replace />;
  else return <div id="admin-login"></div>;
};

export default Login;
