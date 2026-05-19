import React from 'react'

const Topics = () => {
  const topics = ["All", "Tech", "Life", "Opinion", "Notes"]
  return (
    <div className="flex gap-5 max-w-full text-3xl font-">
      {
        topics.map((topic , index) => {
          return <span key={index} className="px-3 py-2 border border-offset-white-hover text-base hover:bg-offset-white-hover cursor-pointer">{topic}</span>
        })
      }
    </div>
  )
}

export default Topics
