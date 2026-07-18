import React, { type Dispatch } from "react";
import controls, { type IModifier } from "./TextModifier";
import { ModifierManager } from "./ModifierManager";

const ContentController = (props: {
  contentRef: React.RefObject<HTMLDivElement | null>;
  activeModifiers: IModifier[] | undefined;
  setActiveModifiers: Dispatch<React.SetStateAction<IModifier[] | undefined>>;
}) => {
  
  const handleActiveModifers = (name: string) => {
    const modifierManager = new ModifierManager();
    const activeModifier = modifierManager.toggle(name);

    if (!activeModifier) {
      return;
    }

    props.setActiveModifiers((prev) => {
      if (prev?.includes(activeModifier)) {
        return prev;
      } else {
        return prev ? [...prev , activeModifier] : [activeModifier];
      }
    });

    console.log(props.activeModifiers);
  };

  return (
    <div
      id="content-controls"
      className="absolute bottom-2 py-3 px-5 w-fit text-center left-1/2 -translate-x-1/2 flex gap-2 bg-offset-white-hover ring-1 ring-text"
    >
      {controls.map((control, index) => {
        return (
          <button
            key={index}
            className={`cursor-pointer px-3 py-1 bg-text/80 ring-1 ring-text rounded hover:bg-text/90`}
            title={control.name}
            onClick={() => handleActiveModifers(control.name)}
          >
            {control.icon}
          </button>
        );
      })}
    </div>
  );
};

export default ContentController;
