import React from "react";
import ArticleInput from "./utils/ArticleInput";
import { inputFields } from "./utils/input";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div id="create">
      <section id="article-editor" className="pt-5 laptop-lg:pt-10">
        <section id="article-header" className="flex justify-between items-center">
          <div id="article-header-title-subtitle">
          <h1 className="laptop-lg:text-5xl font-Quintessential text-4xl pb-2">
            Article Editor
          </h1>
          <p className="laptop-lg:pb-5 laptop-lg:text-md text-sm">
            Share your ideas through the boxes.
          </p>
          </div>
          <Link to={"/admin/dashboard"} id="article-create-close" className="hover:bg-offset-white-hover p-4 cursor-pointer">
            <svg className="h-4 w-4 laptop-lg:h-8 laptop-lg:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path className="fill-text" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>
          </Link>
        </section>
        <form action="">
          {inputFields.map((input, index) => {
            return <ArticleInput input={input} index={index} />;
          })}
          <div
            id="article-decision"
            className="flex gap-3 w-full py-5 laptop-lg:py-10"
          >
            <button className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text w-full">
              Draft Article
            </button>
            <button className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text w-full">
              Publish Article
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
