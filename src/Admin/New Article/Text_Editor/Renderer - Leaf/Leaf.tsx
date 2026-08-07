import React from "react";
import type { RenderLeafProps } from "slate-react";

const Leaf = (props: RenderLeafProps) => {
  return (
    <span
      {...props.attributes}
      className={`
        ${props.leaf.bold && "font-bold"}
        ${props.leaf.italic && "italic"}
        ${props.leaf.underline && "underline"}
        ${props.leaf.strikethrough && "line-through"}
        `}
    >
      {props.children}
    </span>
  );
};

export default Leaf;
