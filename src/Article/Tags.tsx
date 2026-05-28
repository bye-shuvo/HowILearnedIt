import React from 'react'

const Tags = ({tags} : {tags : string[]}) => {
  return (
    <section id="tags-row" className="flex gap-3 laptop-lg:pb-5 pb-3">
        {
            tags.map((tag , index) => {
                return <p key={index} className="p-1 tablet-lg:p-2
                text-sm laptop-lg:text-md ring-1 ring-text">{tag}</p>
            })
        }
    </section>
  )
}

export default Tags
