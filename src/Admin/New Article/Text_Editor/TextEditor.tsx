import React, { useCallback, useState } from "react";
import {
  createEditor,
  Element,
  Transforms,
  Editor,
  type BaseEditor,
} from "slate";
import {
  Editable,
  Slate,
  withReact,
  type RenderElementProps,
  type ReactEditor,
  type RenderLeafProps,
} from "slate-react";
import CodeElement from "./CodeElement";
import DefaultElement from "./DefaultElement";
import Leaf from "./Leaf";

type CustomElement = { type: string; children: CustomText[] };

type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const handleKeydown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "&") {
      e.preventDefault();
      editor.insertText("and");
    } else if (e.key === "`" && e.ctrlKey) {
      e.preventDefault();

      const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === "code",
      });

      Transforms.setNodes(
        editor,
        { type: match ? "paragraph" : "code" },
        {
          match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
        },
      );
    } else if (e.ctrlKey && e.key === "b") {
      e.preventDefault();
      const marks = Editor.marks(editor) as Record<string, unknown> | null;
      const isBold = marks?.bold === true;
      isBold ? Editor.removeMark(editor, "bold") : Editor.addMark(editor, "bold", true);
    }
  }, []);

  const renderLeaf = (props: RenderLeafProps) => {
    return <Leaf {...props} />;
  };

  const renderElement = useCallback((props: RenderElementProps) => {
    if (props.element.type === "code") {
      return <CodeElement {...props} />;
    } else {
      return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate
      editor={editor}
      initialValue={[{ type: "paragraph", children: [{ text: "" }] }]}
    >
      <Editable
        className="ring-1 ring-text px-2 py-1 min-h-100"
        onKeyDown={handleKeydown}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
  );
};

export default TextEditor;
