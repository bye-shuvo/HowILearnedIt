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
import Bold from "./Renderer/Bold";
import ContentController from "./ContentController";
import controls from "./TextModifier";

type CustomElement = { type: string; children: CustomText[] };

type CustomText = {
  text: string;
  [key: string]: any;
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

  interface ICustomEditor {
    isMarkActive: (editor: Editor, mark: string) => boolean;
    isBlockActive: (editor: Editor, block: Element["type"]) => boolean;
    toggleMark: (editor: Editor, mark: string) => void;
    toggleBlock: (editor: Editor, block: Element["type"]) => void;
  }

  const CustomEditor: ICustomEditor = {
    isMarkActive(editor: Editor, mark: string) {
      const marks = Editor.marks(editor);
      return marks ? marks?.[mark] === true : false;
    },

    isBlockActive(editor: Editor, block: Element["type"]) {
      const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === block,
      });

      return !!match;
    },

    toggleMark(editor: Editor, mark: string) {
      if (CustomEditor.isMarkActive(editor, mark)) {
        editor.removeMark(mark);
      } else {
        editor.addMark(mark, true);
      }
    },

    toggleBlock(editor: Editor, block: Element["type"]) {
      const isActive = CustomEditor.isBlockActive(editor, block);
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
    const control = controls.find(
      (c) => c.name === Object.keys(props.leaf).find((key) => key === c.name)
    );

    const element = control?.apply(props);
    if (element) return element;

    // default leaf renderer - must return a React element
    return <span {...props.attributes}>{props.children}</span>;
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
      <ContentController editor={editor} CustomEditor={CustomEditor} />
      <Editable
        className="text-[15px] w-full min-h-100 ring-1 p-4 max-h-[80dvh]"
        onKeyDown={handleKeydown}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
  );
};

export default TextEditor;
