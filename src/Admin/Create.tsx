import React from 'react'

const Create = () => {
  fetch("https://bye-blog-automation.onrender.com/webhook-test/251405ff-8ba1-4d71-9c63-2642036879d4", {
    method : "POST",
    headers : { "Content-Type" : "application/json"} ,
    body : JSON.stringify({
      id: "1",
      slug: "elegant-mind-clean-code",
      title: "The Elegant Mind Behind Clean Code",
      subtitle: "On discipline, restraint, and the architecture of thought",
      excerpt:
        "Why the most maintainable systems are born not from cleverness, but from discipline and restraint.",
      content: "",
      tag: "Architecture",
      topics: ["Clean Code", "Software Design", "Best Practices"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-05-08T09:00:00Z",
      readTime: "6 min",
      wordCount: 1420,
      featured: true,
      status: "published",
      views: 3240,
      likes: 187,
    }),
  })
  return (
    <div>
      
    </div>
  )
}

export default Create
