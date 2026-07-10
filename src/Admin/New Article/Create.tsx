import React from "react";
import ArticleInput from "./utils/ArticleInput";
import { inputFields } from "./utils/input";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div id="create">
      <section id="article-editor" className="pt-5 laptop-lg:pt-10">
        <section
          id="article-header"
          className="flex justify-between items-center"
        >
          <div id="article-header-title-subtitle">
            <h1 className="laptop-lg:text-5xl font-Quintessential text-4xl pb-2">
              Article Editor
            </h1>
            <p className="laptop-lg:pb-5 laptop-lg:text-md text-sm">
              Share your ideas through the boxes.
            </p>
          </div>
          <Link
            to={"/admin/dashboard"}
            id="article-create-close"
            className="hover:bg-offset-white-hover p-4 cursor-pointer"
          >
            <svg
              className="h-4 w-4 laptop-lg:h-8 laptop-lg:w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                className="fill-text"
                d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
              />
            </svg>
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
