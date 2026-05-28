import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Progressbar = () => {
  const [scrollParcentage, setScrollParcentage] = useState(0);
  const getScrollParcentage = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const maxScroll = scrollHeight - clientHeight;
    const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    setScrollParcentage(Math.min(100, Math.max(0, Math.round(percentage))));
  };

  useEffect(() => {
    window.scrollTo({top : 0});
    window.addEventListener("scroll", getScrollParcentage, { passive: true });
    getScrollParcentage();
    return () => window.removeEventListener("scroll", getScrollParcentage);
  }, []);

  return (
    <section
      id="progressbar"
      className="w-full flex items-center gap-3 sticky left-0 top-0 laptop-lg:py-5 py-3 laptop-lg:px-3 backdrop-blur-sm bg-offset-white/20"
    >
      <p className="shrink-0">{scrollParcentage} % read</p>
      <div id="progress-bar" className="w-full h-0.5 bg-text/50 relative">
        <p
          id="scroll-progress"
          className="absolute left-0 top-0 h-full bg-green-400"
          style={{ width: `${scrollParcentage}%` }}
        ></p>
      </div>
      <Link to={"/articles"} className="laptop-lg:px-6 px-4 laptop-lg:py-2 py-1 ring-1 ring-text hover:cursor-pointer hover:bg-offset-white-hover">Close</Link>
    </section>
  );
};

export default Progressbar;
