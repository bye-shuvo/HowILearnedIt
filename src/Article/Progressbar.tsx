import React from "react";

const Progressbar = () => {
  return (
    <section
      id="progressbar"
      className="w-full flex items-center gap-2 sticky left-0 laptop-lg:py-5"
    >
      <p className="shrink-0">
        {Math.round((window.scrollX * 1) / 100) * 100} % read
      </p>
      <div id="progress-bar" className="w-full h-0.5 bg-text/50"></div>
    </section>
  );
};

export default Progressbar;
