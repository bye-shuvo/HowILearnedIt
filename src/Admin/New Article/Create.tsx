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
        <p className="laptop-lg:pb-5 laptop-lg:text-md text-sm">Share your ideas through the boxes.</p>
        <form action="">
          {
            inputFields.map((input , index) => {
              return <ArticleInput input={input} index={index} />
            })
          }
        </form>
      </section>
    </div>
  );
};

export default Create;
