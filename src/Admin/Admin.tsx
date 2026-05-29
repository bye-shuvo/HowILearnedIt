import React from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const location = useLocation();
  const token = true;

  if (!token) return <Navigate to={"/admin/login"} replace />
  else if (location.pathname === "/admin")
    return <div id="admin" className="flex flex-col justify-center items-center laptop-lg:gap-5">
      <h1 className="laptop-lg:text-7xl font-Quintessential">
        Welcome To Admin Page
      </h1>
      <p className="laptop-lg:text-xl">
        Follow the below routes to control the blog site
      </p>
      <div id="admin-navigate-buttons" className="flex items-center justify-center laptop-lg:gap-5 w-full">
        <Link to={"/admin/dashboard"} id="" className="text-center w-full laptop-lg:py-3 ring-1 ring-text hover:cursor-pointer hover:bg-offset-white-hover">
          Go to Dashboard
        </Link>
        <Link to={"/admin/dashboard"} id="" className="text-center w-full laptop-lg:py-3 ring-1 ring-text hover:cursor-pointer hover:bg-offset-white-hover">
          Sign out form admin
        </Link>
      </div>
    </div>
  else return <Outlet />
};

export default Admin;
