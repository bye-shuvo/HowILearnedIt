import type { Editor, Element } from "slate";
import controls from "./TextModifier";

  interface ICustomEditor{
  isMarkActive: (editor: Editor, mark: string) => boolean;
  isBlockActive: (editor: Editor, block: Element['type']) => boolean;
  toggleMark: (editor: Editor, mark: string) => void;
  toggleBlock:(editor: Editor, block: Element['type']) => void;
}

const ContentController = (props : {editor:Editor, CustomEditor : ICustomEditor}) => {
  return (
    <div
      id="content-controls"
      className="relative py-3 px-5 w-fit text-center flex justify-between gap-2 bg-offset-white-hover ring-1 ring-text"
    >
      {controls.map((control, index) => {
        return (
          <button
            key={index}
            className={`cursor-pointer w-full px-3 py-2 bg-text/80 ring-1 ring-text rounded hover:bg-text/90 flex items-center justify-center`}
            title={control.name}
            onMouseDown={(e) => {
              e.preventDefault();
              props.CustomEditor.toggleMark(props.editor, control.name)
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
