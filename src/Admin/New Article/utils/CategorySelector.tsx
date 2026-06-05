import React from 'react'
import { ARTICLE_TAGS } from "../../../Archive/types.ts";
import type { articleInput } from './input.ts';

const CategorySelector = ({input} : {input : articleInput}) => {
  return (
        <select
          className="w-full py-2 ring-1 ring-text hover:cursor-pointer"
          name={input.fieldName}
          id={input.fieldName}
          onSelect={(e) => e.preventDefault()}
        >
          {ARTICLE_TAGS.map((category, index) => {
            return (
              <option
                className="bg-offset-white selection:cursor-pointer"
                key={index}
                value={category}
              >
                {category}
              </option>
            );
          })}
        </select>
  )
}

export default CategorySelector
