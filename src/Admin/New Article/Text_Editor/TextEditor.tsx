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
} from "slate-react";
import CodeElement from "./CodeElement";
import DefaultElement from "./DefaultElement";

type CustomElement =
  | { type: "paragraph"; children: CustomText[] }
  | { type: "code"; children: CustomText[] };

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
    }
  }, []);

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
        className="ring-1 ring-text px-2 py-1 outline-none min-h-100"
        onKeyDown={handleKeydown}
        renderElement={renderElement}
      />
    </Slate>
  );
};

export default TextEditor;
