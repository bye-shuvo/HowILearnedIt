import React from 'react'
import {ARTICLE_TAGS} from "../Archive/types.ts"

const Topics = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 laptop-lg:gap-3">
      {
        ARTICLE_TAGS.map((topic , index) => {
          return <span key={index} className="shrink-0 px-8 py-2 border border-offset-white-hover laptop-lg:text-base text-sm hover:bg-offset-white-hover cursor-pointer">{topic}</span>
        })
      }
    </div>
  )
}

export default Topics
