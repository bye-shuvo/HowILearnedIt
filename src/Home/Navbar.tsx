import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuClose, setMenuClose] = useState(true);

  const check = () => setIsMobile(window.innerWidth <= 768);

  useEffect(() => {
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/*for desktop*/}

      {!isMobile && (
        <nav className="sticky top-10 flex items-center px-10 bg-offset-white-hover/10 backdrop-blur-sm z-50">
          <div className="font-Quintessential font-extrabold text-3xl">
            <Link to={"/"}>HowILearnedIt</Link>
          </div>
          <ul className="flex justify-end items-center gap-x-10 w-full h-15">
            <Link to={"/"}>Home</Link>
            <Link to={"/articles"}>Articles</Link>
            <Link to={"/"}>Topics</Link>
            <Link to={"/"}>About</Link>
          </ul>
        </nav>
      )}

      {/*for mobile*/}

      {isMobile && (
        <nav className="sticky top-5 flex flex-col items-center px-10 bg-offset-white-hover/10 backdrop-blur-sm z-50">
          <div id="mobile-nav-heading" className="w-full flex justify-between">
            <div className="font-Quintessential font-extrabold text-2xl">
              HowILearnedIt
            </div>
            <button
              onClick={() => setMenuClose(!menuClose)}
              className="cursor-pointer"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  className="fill-black"
                  fill="rgb(255, 255, 255)"
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>
          </div>
          {!menuClose && (
            <ul
              onClick={() => setMenuClose(true)}
              className="absolute top-full flex flex-col justify-end items-center gap-y-5 w-full bg-offset-white-hover/10 py-5 backdrop-blur-2xl border-b-2 border-offset-white-hover "
            >
              <Link to={"/"}>Articles</Link>
              <Link to={"/"}>Topics</Link>
              <Link to={"/"}>About</Link>
            </ul>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
