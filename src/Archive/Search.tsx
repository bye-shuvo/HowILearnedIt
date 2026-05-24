import React, { useRef } from "react";
import { ARTICLE_TAGS } from "./types.ts";

const Search = () => {
  const horizintalElement = useRef<HTMLDivElement>(null);

  const handleHorizontalScroll = (e: WheelEvent) => {
    e.preventDefault();
    horizintalElement.current!.scrollLeft += e.deltaY; //allows horizontal scroll
  };

  horizintalElement.current?.addEventListener("wheel", handleHorizontalScroll, {
    passive: false,
  });

  return (
    <section className="flex flex-col gap-3 laptop-lg:pt-10 pt-5 border-t border-text">
      <div id="searchbar" className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search your favourite topic"
          className="px-2 py-2 border border-text w-full"
        />
        <select
          name=""
          id=""
          className="px-2 py-2 bg-offset-white w-[20%] border border-text"
        >
          <option value="">Latest</option>
          <option value="">Oldest</option>
          <option value="">Popular</option>
        </select>
      </div>
      <div
        ref={horizintalElement}
        className="overflow-x-auto w-full scrollbar-none flex gap-2 items-center"
      >
        {ARTICLE_TAGS.map((category) => {
          return (
            <button className="px-4 py-3 border border-text hover:bg-offset-white-hover text-nowrap hover:cursor-pointer">
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
