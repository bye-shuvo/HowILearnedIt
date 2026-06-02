import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const ArticleRoute = () => {
  const location = useLocation();

  if (
    location.pathname === "/admin/article" ||
    location.pathname === "/admin/article/"
  ) {
      return (
        <div
          id="article-route"
          className="flex flex-col justify-center items-center tablet-lg:gap-5 gap-3"
        >
          <img
            className="h-40 tablet-lg:h-50 laptop-lg:h-60 aspect-auto drop-shadow-2xl drop-shadow-text/50"
            src="/article-writting.png"
            alt=""
          />
          <h1 className="text-4xl tablet-lg:text-5xl laptop-lg:text-7xl font-Quintessential">
            Routes to contol article
          </h1>
          <p className="text-base tablet-lg:text-lg laptop-lg:text-xl">
            Follow the below routes to control the articles on the site
          </p>
          <div
            id="admin-navigate-buttons"
            className="flex items-center justify-center gap-3 tablet-lg:gap-5 w-full"
          >
            <Link
              to={"/admin/article/new"}
              id=""
              className="text-center w-full py-2 laptop-lg:py-3 ring-1 ring-text hover:cursor-pointer hover:bg-offset-white-hover"
            >
              Create a new article
            </Link>
            <Link
              to={"/admin/article/all"}
              id=""
              className="text-center w-full py-2 laptop-lg:py-3 ring-1 ring-text hover:cursor-pointer hover:bg-offset-white-hover"
            >
              Control all the articles
            </Link>
          </div>
        </div>
      );
  }
  else return <Outlet />
};

export default ArticleRoute;
