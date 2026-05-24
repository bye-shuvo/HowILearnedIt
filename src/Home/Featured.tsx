import React from "react";
import { type Article } from "../Archive/types.ts";
import H1 from "../utils/H1.tsx";

const Featured = () => {
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
    const FEATURED_ARTICLES = ARTICLES.filter((article) => article.featured === true);
  return (
    <section className="max-w-full flex flex-col justify-center items-center px-5 laptop-lg:px-0 mb-10">
     <H1 heading = "Featured" />
      {FEATURED_ARTICLES.map((article, index) => {
        return (
          <div key={index} className="w-full p-3 laptop-lg:p-5 flex flex-col gap-3 laptop-lg:gap-5 border border-text hover:bg-offset-white-hover">
            <p className="laptop-lg:text-lg">{article.tag}</p>
            <p className="font-content-title text-4xl laptop-lg:text-5xl">
              {article.title}
            </p>
            <p className="font-content-subtitle text-xl laptop-lg:text-2xl">
              {article.slug}
            </p>
            <p className="font-content-subtitle text-sm laptop-lg:text-lg">{
      article.subtitle}</p>
            <button className="flex items-center gap-2 transition-all ease-in-out duration-300">
              Read more
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  className="fill-text"
                  d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                />
              </svg>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Featured;
