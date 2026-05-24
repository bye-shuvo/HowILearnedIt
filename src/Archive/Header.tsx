import React from "react";
import Articles from "./Articles";

const Header = () => {
  return (
    <section className="laptop-lg:relative laptop-lg:top-10 laptop-lg:max-h-[calc(100dvh-6.25rem)] max-h-dvh min-h-fit w-full flex flex-col gap-5 pt-10">
      <p className="text-md">All Writing</p>
      <h1 className="font-Quintessential laptop-lg:text-8xl tablet-lg:text-6xl text-5xl">Articles</h1>
      <p className="text-base laptop-lg:text-lg">A way of sharing knowledge through a tunnel</p>
      <div className="flex justify-between items-center w-full text-sm text-text/70">
        <p>Showing all {Articles.length} articles</p>
        <div className="flex gap-2 items-center"><p className="h-0.5 w-20 bg-text/70"></p><p>8 out of 8</p></div>
      </div>
      <div className="h-px w-full bg-text/20"></div>
    </section>
  );
};

export default Header;
