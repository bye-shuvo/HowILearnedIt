import React from "react";
import Info from "./Info";

const LandingPage = () => {
  return (
    <main
      id="landing-page"
      className="md:h-[calc(100dvh-3.75rem)] h-dvh flex flex-col justify-center items-center leading-loose relative"
    >
      <h1 className="font-great-vibes text-4xl md:text-7xl xl:text-8xl text-center leading-tight text-wrap px-5">
        Code is how I think. <br /> Words are how I make you feel it.
      </h1>
      <img
        className="absolute md:top-[22%] md:left-[78%] md:h-50 aspect-square hue-rotate-15"
        src="/paper-plane.png"
        alt=""
      />
      <h2 className="text-wrap text-center leading-relaxed px-5 font-content-subtitle text-md md:text-2xl">
        Honest writing on software, systems and the quiet discipline it takes to
        build things that last.
      </h2>
      <Info />
    </main>
  );
};

export default LandingPage;
