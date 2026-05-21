import React from "react";
import Info from "./Info";

const LandingPage = () => {
  return (
    <main
      id="landing-page"
      className="laptop-lg:h-[calc(100dvh-3.75rem)] h-dvh flex flex-col justify-center items-center leading-loose relative"
    >
      <h1 className="font-great-vibes text-4xl laptop-lg:text-7xl desktop-sm:text-8xl text-center leading-tight text-wrap px-5">
        Code is how I think. <br /> Words are how I make you feel it.
      </h1>
      <img
        className="absolute laptop-lg:top-[18%] laptop-lg:left-[78%] laptop-lg:h-36 aspect-square hue-rotate-15 pointer-events-none"
        src="/paper-plane.png"
        alt=""
      />
      <h2 className="text-wrap text-center leading-relaxed px-5 font-content-subtitle text-laptop-lg: laptop-lg:text-2xl">
        Honest writing on software, systems and the quiet discipline it takes to
        build things that last.
      </h2>
      <Info />
    </main>
  );
};

export default LandingPage;
