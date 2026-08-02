import React from 'react'
import type { RenderLeafProps } from 'slate-react';

const Leaf = (props: RenderLeafProps) => {
  const leaf: any = props.leaf
  return (
    <span {...props.attributes} className={`${leaf.bold ? "font-bold" : "font-normal"}`}>
      {props.children}
    </span>
  )
}

export default Leaf
