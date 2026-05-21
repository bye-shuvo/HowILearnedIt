import React from 'react'

const Topics = () => {
  const topics = [
  "All",
  "Architecture",
  "TypeScript",
  "Systems",
  "Philosophy",
  "Craft",
  "DevOps",
  "Open Source",
  "Career",
  "Performance",
  "Security",
  "Testing",
  "API Design",
  "Database",
  "Frontend",
  "Backend",
  "AI & ML",
  "Tooling",
  "Algorithms",
  "Leadership",
];
  return (
    <div className="flex flex-wrap items-center gap-2 laptop-lg:gap-3">
      {
        topics.map((topic , index) => {
          return <span key={index} className="shrink-0 px-8 py-2 border border-offset-white-hover laptop-lg:text-base text-sm hover:bg-offset-white-hover cursor-pointer">{topic}</span>
        })
      }
    </div>
  )
}

export default Topics
