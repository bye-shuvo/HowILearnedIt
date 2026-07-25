import React, { useState, useRef, useCallback, useEffect } from "react";
import type { articleInput } from "../utils/input";
import ContentController from "./ContentController";
import type { IModifier } from "./TextModifier";

interface ITextNode {
  id: number;
  text: string;
  modifiers: string[];
}

const ContentEditor = ({ input }: { input: articleInput }) => {
  const [text, setText] = useState<string>("");
  const [textNodes, setTextNodes] = useState<ITextNode[]>();
  const [activeModifiers, setActiveModifiers] = useState<IModifier[]>();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<string>("");

  const handleInput = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const allowedTextKey = /^[\p{L}\p{N}\p{P}\p{S}\s]$/u;

      if (e.key === "Backspace") {
      }

      if (!allowedTextKey.test(e.key)) {
        return;
      }

      e.preventDefault();
      let modifiedNode: ITextNode;

      if (activeModifiers && activeModifiers.length > 0) {

        const modifers = activeModifiers.map((modifier) => modifier.name);
        textRef.current = textRef.current.concat(e.key) ;

        modifiedNode = activeModifiers?.reduce(
          (nextNode: ITextNode, modifier: IModifier, index: number) => {
            const modifiedText = modifier.apply(nextNode.text);

            const modifierNode: ITextNode = {
              id: textNodes ? textNodes.length : 0,
              text: modifiedText,
              modifiers: modifers,
            };
            return modifierNode;
          },
          { id: 0, text: textRef.current, modifiers: modifers } as ITextNode,
        );
      } else {
        textRef.current = textRef.current.concat(e.key) ;
        modifiedNode = {
          id: textNodes ? textNodes.length : 0,
          text: `<p>${textRef.current}</p>`,
          modifiers: [],
        };
      }
      console.log("modifiedNode \n", [modifiedNode]);
      console.log("TextNode \n", textNodes);

      setTextNodes(prev => prev ? [...prev, modifiedNode] : [modifiedNode]);

      //working section
      const modifierText =
        activeModifiers?.reduce((nextChar: string, modifier) => {
          return modifier.apply(nextChar);
        }, e.key) || e.key;

      const nextText = text.concat(modifierText);
      setText(nextText);

      if (contentRef.current) {
        contentRef.current.innerHTML = nextText;
      }
    },
    [text, activeModifiers],
  );

  useEffect(() => {
    textRef.current = "";
  }, [activeModifiers])

  return (
    <div id="content-container" className="flex flex-col gap-3">
      <div
        aria-label="Content-write"
        className="flex w-full h-fit pb-20 ring-1 relative scrollbar-thumb-text/50 scrollbar-track-offset-white"
      >
        <div
          ref={contentRef}
          id={input.fieldName}
          aria-label={input.labelName}
          aria-multiline={true}
          className="text-[17px] w-full min-h-100 outline-0 p-4 max-h-[80dvh] overflow-y-scroll overflow-x-hidden"
          role="textbox"
          inputMode="text"
          contentEditable={true}
          translate="no"
          onKeyDown={handleInput}
          autoFocus={true}
        />
        <ContentController
          contentRef={contentRef}
          activeModifiers={activeModifiers}
          setActiveModifiers={setActiveModifiers}
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
