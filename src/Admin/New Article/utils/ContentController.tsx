import React from "react";
import controls from "./TextModifier";

const ContentController = ({
  contentRef
}: {
  contentRef : React.RefObject<HTMLDivElement | null>;
}) => {

    const handleContent = (modifiedHtml : string) => {
     contentRef.current!.innerHTML = modifiedHtml ;
  }

  return (
    <div
      id="content-controls"
      className="absolute bottom-2 py-3 px-5 w-fit text-center left-1/2 -translate-x-1/2 flex gap-2 bg-offset-white-hover ring-1 ring-text"
    >
      {controls.map((control, index) => {
        return (
          <button
            key={index}
            className="cursor-pointer px-3 py-1 bg-text/80 text-white rounded focus:bg-text hover:bg-text/90"
            title={control.name}
            onClick={() => handleContent(control.apply(contentRef.current!.innerHTML ? contentRef.current!.innerHTML : ''))}
          >
            {control.icon}
          </button>
        );
      })}
    </div>
  );
};

export default ContentController;
