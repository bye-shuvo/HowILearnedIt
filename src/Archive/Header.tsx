import React from "react";
import Articles from "./Articles";

const Header = () => {
  return (
    <section className="w-full flex flex-col gap-5 laptop-lg:py-10 py-5 mt-10">
      <p className="text-md">All Writing</p>
      <h1 className="font-Quintessential laptop-lg:text-8xl tablet-lg:text-6xl text-5xl">Articles</h1>
      <p className="text-base laptop-lg:text-lg">A way of sharing knowledge through a tunnel</p>
      <div className="flex justify-between items-center w-full h-fit text-sm text-text/70">
        <p>Showing all {Articles.length} articles</p>
        <div className="flex gap-2 items-center"><p className="h-0.5 w-20 bg-text/70"></p><p>8 out of 8</p></div>
      </div>
    </section>
  );
};

export default Header;
