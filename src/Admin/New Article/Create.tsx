import React from "react";
import ArticleInput from "./utils/ArticleInput";
import { inputFields } from "./utils/input";

const Create = () => {
  return (
    <div id="create">
      <section id="navigate"></section>
      <section id="article-editor" className="pt-5 laptop-lg:pt-10">
        <h1 className="laptop-lg:text-5xl font-Quintessential text-4xl pb-2">
          Article Editor
        </h1>
        <p className="laptop-lg:pb-5 laptop-lg:text-md text-sm">
          Share your ideas through the boxes.
        </p>
        <form action="">
          {inputFields.map((input, index) => {
            return <ArticleInput input={input} index={index} />;
          })}
          <div
            id="article-decision"
            className="flex gap-3 w-full laptop-lg:py-10"
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
