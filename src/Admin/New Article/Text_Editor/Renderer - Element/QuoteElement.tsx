import React from 'react'
import type { RenderElementProps } from 'slate-react';

const QuoteElement = (props : RenderElementProps) => {
  return (
    <span {...props.attributes} className="border-l-7 border-offset-white-hover px-2 py-3">
      {...props.children}
    </span>
  )
}

export default QuoteElement
