import React from "react";
import controls from "./TextModifier";

const ContentController = () => {
  return (
    <div
      id="content-controls"
      className="absolute bottom-2 py-3 px-5 w-fit text-center left-1/2 -translate-x-1/2 flex gap-2 bg-offset-white-hover ring-1 ring-text"
    >
      {controls.map((control , index) => {
        return (
          <button
            key={index}
            className="px-3 py-1 bg-text/80 text-white rounded focus:bg-text hover:bg-text/90"
            title={control.name}
          >{control.icon}</button>
        );
      })}
    </div>
  );
};

export default ContentController;
