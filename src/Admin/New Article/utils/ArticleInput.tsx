import React, { type Key } from "react";
import type { articleInput } from "./input.ts";

const ArticleInput = ({
  input,
  index,
}: {
  input: articleInput;
  index: Key;
}) => {
  return (
    <div key={index} id={input.elementId} className="flex flex-col gap-1 text-text laptop-lg:pb-5">
      <label htmlFor={input.fieldName} className="text-sm">{input.labelName}</label>
      {input.fieldName === "content" ? (
        <div className="flex flex-col gap-3">
          <textarea
          name={input.fieldName}
          id={input.fieldName}
          rows={10}
          className="ring-1 px-2 py-1"
        ></textarea>
          <button className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text">Rephrase</button>
        </div>
      ) : (
        <input
          id={input.fieldName}
          type="text"
          className="ring-1 ring-text px-2 py-1"
        />
      )}
    </div>
  );
};

export default ArticleInput;
