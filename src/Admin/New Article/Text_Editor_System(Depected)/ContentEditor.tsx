// src/Admin/New Article/Text_Editor_System/ContentEditor.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { articleInput } from "../utils/input";
import ContentController from "./ContentController";
import controls, { type IModifier } from "./TextModifier";

interface ITextNode {
  id: number;
  text: string;
  modifiers: string[];
}

const sameModifiers = (a: string[], b: string[]) =>
  a.length === b.length && a.every((m) => b.includes(m));

const wrapNode = (node: ITextNode): string =>
  node.modifiers.reduce((acc, name) => {
    const mod = controls.find((c) => c.name === name);
    return mod ? mod.apply(acc) : acc;
  }, node.text);

const ContentEditor = ({ input }: { input: articleInput }) => {
  const [textNodes, setTextNodes] = useState<ITextNode[]>([]);
  const [activeModifiers, setActiveModifiers] = useState<IModifier[]>();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(0);

  const paint = (nodes: ITextNode[]) => {
    const el = contentRef.current;
    if (!el) return;
    el.innerHTML = `<p>${nodes.map(wrapNode).join("")}</p>`;
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel?.removeAllRanges();
    sel?.addRange(range);
  };

  const handleInput = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const modifierNames = activeModifiers?.map((m) => m.name) ?? [];

      if (e.key === "Backspace") {
        e.preventDefault();
        if (!textNodes.length) return;
        const last = textNodes[textNodes.length - 1];
        const text = last.text.slice(0, -1);
        const next = text
          ? [...textNodes.slice(0, -1), { ...last, text }]
          : textNodes.slice(0, -1);
        setTextNodes(next);
        paint(next);
        return;
      }

      if (!/^[\p{L}\p{N}\p{P}\p{S}\s]$/u.test(e.key)) return;
      e.preventDefault();

      const last = textNodes.at(-1);
      const next =
        last && sameModifiers(last.modifiers, modifierNames)
          ? [...textNodes.slice(0, -1), { ...last, text: last.text + e.key }]
          : [...textNodes, { id: idRef.current++, text: e.key, modifiers: modifierNames }];

      setTextNodes(next);
      paint(next);
      console.log(next);
    },
    [activeModifiers, textNodes],
  );

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