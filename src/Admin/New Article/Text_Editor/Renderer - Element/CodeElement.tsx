import React from 'react'
import type { RenderElementProps } from 'slate-react';

//renderer element for the renderelement prop 
const CodeElement = (props : RenderElementProps)  => {
  return (
    <pre {...props.attributes}>
        <code>{props.children}</code>
    </pre>
  )
}

export default CodeElement ;
