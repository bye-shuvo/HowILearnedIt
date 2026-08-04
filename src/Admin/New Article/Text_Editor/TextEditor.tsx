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
import Bold from "./Bold";

type CustomElement = { type: string; children: CustomText[] };

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikeThrough?: boolean;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const CustomEditor = {
    isMarkActive(editor: Editor, mark: string) {
      const marks = Editor.marks(editor) as Record<string, unknown> | null;
      return marks ? (marks as Record<string, boolean>)[mark] === true : false;
    },

    isBlockActive(editor: Editor, block: string) {
      const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === block,
      });

      return match;
    },

    toggleMark(editor: Editor, mark: string) {
      if (this.isMarkActive(editor, mark)) {
        editor.removeMark(mark);
      } else {
        editor.addMark(mark, true);
      }
    },

    toggleBlock(editor: Editor, block: string) {
      const isActive = this.isBlockActive(editor, block);
      Transforms.setNodes(
        editor,
        { type: isActive ? undefined : block },
        {
          match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
        },
      );
    },
  };

  const handleKeydown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "&") {
      e.preventDefault();
      editor.insertText("and");

    } else if (e.key === "`" && e.ctrlKey) {
      e.preventDefault();
      CustomEditor.toggleBlock(editor, "code");
      
    } else if (e.ctrlKey && e.key === "b") {
      e.preventDefault();
      CustomEditor.toggleMark(editor, "bold");
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Bold {...props} />;
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
        className="ring-1 ring-text px-2 py-1 min-h-100"
        onKeyDown={handleKeydown}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
  );
};

export default TextEditor;
