import React from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const location = useLocation();
  const token = true;

  if (!token) return <Navigate to={"/admin/login"} state={token} replace />
  else if (location.pathname === "/admin" || location.pathname === "/admin/")
    return <div id="admin" className="flex flex-col justify-center items-center tablet-lg:gap-5 gap-3">
      <img className="h-40 tablet-lg:h-50 laptop-lg:h-60 aspect-auto drop-shadow-2xl drop-shadow-text/50" src="/admin.png" alt="" />
      <h1 className="text-4xl tablet-lg:text-5xl laptop-lg:text-7xl font-Quintessential">
        Welcome To Admin Page
      </h1>
      <p className="text-base tablet-lg:text-lg laptop-lg:text-xl">
        Follow the below routes to control the blog site
      </p>
      <div id="admin-navigate-buttons" className="flex items-center justify-center gap-3 tablet-lg:gap-5 w-full">
        <Link to={"/admin/dashboard"} id="" className="text-center w-full py-2 laptop-lg:py-3 ring-1 ring-text hover:cursor-pointer hover:bg-offset-white-hover">
          Go to Dashboard
        </Link>
        <Link to={"/admin/dashboard"} id="" className="text-center w-full py-2 laptop-lg:py-3 ring-1 ring-text hover:cursor-pointer hover:bg-offset-white-hover">
          Sign out form admin
        </Link>
      </div>
    </div>
  else return <Outlet />
};

export default Admin;
