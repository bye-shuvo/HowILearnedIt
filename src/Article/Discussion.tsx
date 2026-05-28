import React from 'react'
import H1 from '../utils/H1';

const Discussion = () => {
  return (
    <section id="discussion" className="w-full flex flex-col laptop-lg:py-5 py-3">
      <H1 heading="Discussion" />
      <div id="comment-trigger" className="flex gap-3">
        <input type="text" className="text-sm tablet-lg:text-base p-2 placeholder:text-text/50 w-full ring-1 ring-text" placeholder="Share your thought!"/>
        <button className="ring-1 ring-text p-2 hover:cursor-pointer hover:bg-offset-white-hover tablet-lg:text-base text-sm">Comment</button>
      </div>
      <div id="user-comments" className="w-full flex flex-col">
        <H1 />
      </div>
    </section>
  )
}

export default Discussion
