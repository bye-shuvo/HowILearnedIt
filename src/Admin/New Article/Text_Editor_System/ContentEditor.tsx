import React, { useState, useRef, useEffect, useCallback } from "react";
import type { articleInput } from "../utils/input";
import ContentController from "./ContentController";
import type { IModifier } from "./TextModifier";

const ContentEditor = ({ input }: { input: articleInput }) => {
  const [activeModifiers, setActiveModifiers] = useState<IModifier[]>();
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleInput = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    let modifiedChar = e.key;
    console.log(modifiedChar);
    if(!e.key.match('\A-Za-z0-1\@')){
      return '';
    }
    const modiferText = activeModifiers?.map((modifier) => {
      modifiedChar = modifier.apply(e.key);
      return modifiedChar;
    }).join("");

    if (!modiferText) {
      return;
    }
    if (contentRef.current) {
      contentRef.current.innerHTML = modiferText;
    }
  } , [activeModifiers]);

  return (
    <div id={input.fieldName} className="flex flex-col gap-3">
      <div
        aria-label="Content-write"
        className="flex w-full h-fit pb-20 ring-1 relative scrollbar-thumb-text/50 scrollbar-track-offset-white"
      >
        <div
          ref={contentRef}
          id={input.fieldName}
          role="textbox"
          aria-label={input.labelName}
          className="text-[17px] w-full min-h-100 outline-0 p-4 max-h-dvh overflow-y-scroll overflow-x-hidden"
          contentEditable={true}
          translate="no"
          onKeyDown={handleInput}
        />
        <ContentController
          contentRef = {contentRef}
          activeModifiers = {activeModifiers}
          setActiveModifiers = {setActiveModifiers}
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
