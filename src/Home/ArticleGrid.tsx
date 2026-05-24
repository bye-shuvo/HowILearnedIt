import React from "react";
import { type Article } from "../Archive/types.ts";
import H1 from "../utils/H1.tsx";

const ArticleGrid = () => {
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
  ].filter((article) => article.featured === false);
  return (
    <section id="article-grid" className="max-w-full w-full h-fit">
        <H1 heading="Articles" />
      <div className="grid grid-cols-1 tablet-lg:grid-cols-2 border-t border-l">
        {ARTICLES.map((article, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 p-5 laptop-lg:p-7 border-b border-r border-text box-content group text-sm hover:bg-offset-white-hover"
            >
              <p className="text-base laptop-lg:text-lg">{article.tag}</p>
              <p>{article.slug}</p>
              <h2 className="font-content-title text-2xl laptop-lg:text-3xl">
                {article.title}
              </h2>
              <h3 className="font-content-subtitle text-base laptop-lg:text-lg">
                {article.subtitle}
              </h3>
              <p>{article.excerpt}</p>
              <div className="flex items-center gap-3 text-sm">
                <p className="flex gap-2 items-center text-sm">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      className="fill-text"
                      d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"
                    />
                  </svg>
                  {new Date(article.publishedAt).toDateString()}
                </p>
                <p className="flex items-center gap-2 text-sm"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="fill-text" d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>{article.readTime}</p>
              </div>
              <div className="flex gap-3 laptop-lg:gap-5">
                <p className="flex items-center gap-2 text-sm">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      className="fill-text"
                      d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"
                    />
                  </svg>
                  {article.views}
                </p>
                <p className="flex gap-2 items-center text-sm">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      className="fill-text"
                      d="M80 160c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 192c0-17.7 14.3-32 32-32l48 0zM270.6 16C297.9 16 320 38.1 320 65.4l0 4.2c0 6.8-1.3 13.6-3.8 19.9L288 160 448 160c26.5 0 48 21.5 48 48 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 23.4-16.8 42.9-39 47.1 4.4 7.3 7 15.8 7 24.9 0 22.2-15 40.8-35.4 46.3 2.2 5.5 3.4 11.5 3.4 17.7 0 26.5-21.5 48-48 48l-87.9 0c-36.3 0-71.6-12.4-99.9-35.1L184 435.2c-15.2-12.1-24-30.5-24-50l0-186.6c0-14.9 3.5-29.6 10.1-42.9L226.3 43.3C234.7 26.6 251.8 16 270.6 16z"
                    />
                  </svg>
                  {article.likes}
                </p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <p className="flex gap-2 items-center text-sm">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      className="fill-text"
                      d="M256.1 8a120 120 0 1 1 0 240 120 120 0 1 1 0-240zM226.4 304l59.4 0c6.7 0 13.2 .4 19.7 1.1-.9 4.9-1.4 9.9-1.4 15l0 92.1c0 25.5 10.1 49.9 28.1 67.9l31.9 31.9-286.3 0c-16.4 0-29.7-13.3-29.7-29.7 0-98.5 79.8-178.3 178.3-178.3zM352.1 412.2l0-92.1c0-17.7 14.3-32 32-32l92.1 0c12.7 0 24.9 5.1 33.9 14.1l96 96c18.7 18.7 18.7 49.1 0 67.9l-76.1 76.1c-18.7 18.7-49.1 18.7-67.9 0l-96-96c-9-9-14.1-21.2-14.1-33.9zm104-44.2a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
                    />
                  </svg>
                  {article.author.name}
                </p>
                <p>{article.author.href}</p>
                <button className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                  Read more
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path className="fill-text" d="M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArticleGrid;
