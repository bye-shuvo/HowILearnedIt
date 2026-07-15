import React, { useState, useRef } from "react";
import type { articleInput } from "./input";
import ContentController from "./ContentController";

const ContentEditor = ({ input }: { input: articleInput }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div id={input.fieldName} className="flex flex-col gap-3">
      <div
        aria-label="Content-write"
        className="flex w-full h-fit pb-14 ring-1 relative scrollbar-thumb-text/50 scrollbar-track-offset-white"
      >
        <div
          ref={contentRef}
          id={input.fieldName}
          role="textbox"
          aria-label={input.labelName}
          className="text-[17px] w-full min-h-100 outline-0 p-4"
          contentEditable={true}
          translate="no"
        />
        <ContentController
          contentRef = {contentRef}
        />
      </div>
      <button
        aria-label="Content-rephraser"
        className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text"
      >
        Rephrase
      </button>
    </div>
  );
};

export default ContentEditor;
