import React from 'react'
import type { articleInput } from './input';
import ContentController from './ContentController';

const ContentEditor = ({input} : {input : articleInput}) => {
  return (
        <div id="content-editor" className="relative flex flex-col gap-3 w-full">
          <ContentController />
          <textarea
            name={input.fieldName}
            id={input.fieldName}
            rows={15}
            className="ring-1 px-2 py-1 text-md pb-15"
          ></textarea>
          <button className="ring-1 py-2 bg-offset-white-hover/90 hover:text-white hover:cursor-pointer hover:bg-text">
            Rephrase
          </button>
        </div>
  )
}

export default ContentEditor
