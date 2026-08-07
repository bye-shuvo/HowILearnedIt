import type { Editor, Element } from "slate";
import controls from "./TextModifier";
import { ReactEditor, useSlate } from "slate-react";

interface ICustomEditor {
  isMarkActive: (editor: Editor, mark: string) => boolean;
  isBlockActive: (editor: Editor, block: Element["type"]) => boolean;
  toggleMark: (editor: Editor, mark: string) => void;
  toggleBlock: (editor: Editor, block: Element["type"]) => void;
}

const ContentController = (props: { CustomEditor: ICustomEditor }) => {
  const editor = useSlate();
  return (
    <div
      id="content-controls"
      className="relative py-3 px-5 w-full text-center flex justify-between gap-5 bg-offset-white-hover ring-1 ring-text"
    >
      {controls.map((control, index) => {
        return (
          <button
            key={index}
            className={`cursor-pointer w-full px-3 py-2 ring-1 ring-text rounded hover:bg-text/90 flex items-center justify-center ${props.CustomEditor.isMarkActive(editor , control.name)? "fill-white bg-text/90" : "fill-text" } hover:fill-white `}
            title={control.name}
            onMouseDown={(e) => {
              e.preventDefault();
              ReactEditor.focus(editor);
              props.CustomEditor.toggleMark(editor, control.name);
            }}
          >
            {control.icon}
          </button>
        );
      })}
    </div>
  );
};

export default ContentController;
