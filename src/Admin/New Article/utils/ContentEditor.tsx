import React from "react";
import type { articleInput } from "./input";
import ContentController from "./ContentController";

const ContentEditor = ({ input }: { input: articleInput }) => {
  return (
    <div id="content-editor" className="flex flex-col gap-3">
      <div aria-label="Content-write" className="flex w-full h-fit min-h-40 ring-1 relative">
        <textarea
          name={input.fieldName}
          id={input.fieldName}
          rows={15}
          aria-rowcount={15}
          className="text-md w-full outline-0 p-4"
        ></textarea>
        <ContentController />
      </div>
      <button aria-label="Content-rephraser" className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text">
        Rephrase
      </button>
    </div>
  );
};

export default ContentEditor;
