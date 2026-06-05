import React from 'react'
import type { articleInput } from './input';

const ContentEditor = ({input} : {input : articleInput}) => {
  return (
        <div className="flex flex-col gap-3">
          <textarea
            name={input.fieldName}
            id={input.fieldName}
            rows={10}
            className="ring-1 px-2 py-1 text-md"
          ></textarea>
          <button className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text">
            Rephrase
          </button>
        </div>
  )
}

export default ContentEditor
