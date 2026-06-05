import React from "react";
import type { Article } from "../../Archive/types";

const Articles = () => {
  const ARTICLES: Article[] = [
    {
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
    },
    {
      id: "2",
      slug: "type-systems-thinking",
      title: "Type Systems as a Form of Thinking",
      subtitle: "Strong types aren't constraints — they're a language",
      excerpt:
        "Strong types aren't constraints — they're a conversation between you and the machine.",
      content: "",
      tag: "TypeScript",
      topics: ["TypeScript", "Type Safety", "Developer Experience"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-05-03T09:00:00Z",
      readTime: "5 min",
      wordCount: 1180,
      featured: false,
      status: "published",
      views: 2180,
      likes: 134,
    },
    {
      id: "3",
      slug: "debugging-patience",
      title: "What Debugging Taught Me About Patience",
      subtitle: "Every broken build is a question",
      excerpt:
        "Every broken build is a question the system is asking you. Are you listening?",
      content: "",
      tag: "Philosophy",
      topics: ["Debugging", "Mindset", "Engineering Culture"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-04-27T09:00:00Z",
      readTime: "4 min",
      wordCount: 960,
      featured: false,
      status: "published",
      views: 1870,
      likes: 112,
    },
    {
      id: "4",
      slug: "distributed-failures",
      title: "Distributed Failures & Human Error",
      subtitle: "Most outages aren't technical — they're human",
      excerpt:
        "Most outages aren't caused by bad code. They're caused by bad assumptions baked in at design time.",
      content: "",
      tag: "Systems",
      topics: ["Distributed Systems", "Reliability", "Incident Response"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-04-20T09:00:00Z",
      readTime: "7 min",
      wordCount: 1640,
      featured: false,
      status: "published",
      views: 2560,
      likes: 201,
    },
    {
      id: "5",
      slug: "terminal-creative-space",
      title: "The Terminal as a Creative Space",
      subtitle: "Precision as an aesthetic",
      excerpt:
        "There's a particular beauty in a tool that demands precision and rewards fluency.",
      content: "",
      tag: "Craft",
      topics: ["Terminal", "Developer Tools", "Workflow"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-04-14T09:00:00Z",
      readTime: "5 min",
      wordCount: 1100,
      featured: false,
      status: "published",
      views: 1420,
      likes: 98,
    },
    {
      id: "6",
      slug: "devops-empathy",
      title: "DevOps as Empathy for Future You",
      subtitle: "The ops you skip today is the crisis you own tomorrow",
      excerpt:
        "Writing good pipelines is an act of empathy — mostly for yourself, six months from now, at 2am.",
      content: "",
      tag: "DevOps",
      topics: ["DevOps", "CI/CD", "Engineering Culture"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-04-07T09:00:00Z",
      readTime: "6 min",
      wordCount: 1350,
      featured: false,
      status: "published",
      views: 1980,
      likes: 143,
    },
    {
      id: "7",
      slug: "open-source-labor",
      title: "The Invisible Labor of Open Source",
      subtitle: "On maintainers, burnout, and the software we take for granted",
      excerpt:
        "Behind every library you depend on is a person who never asked to be depended on this much.",
      content: "",
      tag: "Open Source",
      topics: ["Open Source", "Burnout", "Community"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-03-30T09:00:00Z",
      readTime: "8 min",
      wordCount: 1860,
      featured: false,
      status: "published",
      views: 4120,
      likes: 312,
    },
    {
      id: "8",
      slug: "career-slow-burn",
      title: "The Slow Burn of a Software Career",
      subtitle: "Compounding effort, invisible progress",
      excerpt:
        "Most career growth is invisible until it suddenly isn't. You don't level up — you accumulate.",
      content: "",
      tag: "Career",
      topics: ["Career Growth", "Seniority", "Long Game"],
      author: { id: "1", name: "Alex Morgan", initials: "AM" },
      publishedAt: "2026-03-22T09:00:00Z",
      readTime: "5 min",
      wordCount: 1090,
      featured: false,
      status: "published",
      views: 3780,
      likes: 267,
    },
  ];

  const RECENT_ARTICLES = ARTICLES.filter(
    (article) => article.publishedAt < new Date(Date.now()).toISOString()
  ).slice(0,5);

  return (
    <section className="w-full pb-5">
      <div className="overflow-x-auto border border-text bg-offset-white-hover shadow-sm">
        <table className="w-full divide-y divide-text/50">
          <thead className="bg-offset-white-hover">
            <tr className="text-md">
              <th className="text-center px-4 py-3 font-semibold text-text">Article Id</th>
              <th className="px-4 py-3 text-center font-semibold text-text">Article Title</th>
              <th className="px-4 py-3 text-center font-semibold text-text">Article Likes</th>
              <th className="px-4 py-3 text-center font-semibold text-text">Update</th>
              <th className="px-4 py-3 text-center font-semibold text-text">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-text/50 bg-offset-white">
            {RECENT_ARTICLES.map((article) => (
              <tr key={article.id} className="hover:bg-offset-white-hover">
                <td className="px-4 py-4 text-sm text-text text-center">{article.id}</td>
                <td className="px-4 py-4 text-sm text-text text-center line-clamp-1">{article.title}</td>
                <td className="px-4 py-4 text-sm text-text text-center">{article.likes}</td>
                <td className="text-center">
                  <button className="h-15 w-full hover:bg-green-400">
                    Update
                  </button>
                </td>
                <td className="">
                  <button className="h-15 w-full hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Articles;
