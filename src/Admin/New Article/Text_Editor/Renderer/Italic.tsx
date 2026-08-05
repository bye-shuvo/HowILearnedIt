import React from 'react'
import type { RenderLeafProps } from 'slate-react';

const Italic = (props: RenderLeafProps) => {
  const leaf = props.leaf
  return (
    <span {...props.attributes} className={`${leaf.italic ? "italic" : "font-normal"}`}>
      {props.children}
    </span>
  )
}

export default Italic
