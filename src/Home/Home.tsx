import { useState } from "react";

const posts = [
  {
    id: 1,
    tag: "Design",
    title: "The Art of Minimalist UI",
    excerpt: "Why less is more when crafting interfaces that convert and delight users.",
    author: "Sara Malik",
    date: "May 5, 2026",
    readTime: "4 min read",
  },
  {
    id: 2,
    tag: "Development",
    title: "React Patterns You Should Know",
    excerpt: "Composition, render props, and custom hooks — the patterns that scale.",
    author: "James Liu",
    date: "May 3, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    tag: "Productivity",
    title: "Deep Work in a Distracted World",
    excerpt: "Reclaim your focus and ship better work with proven systems.",
    author: "Anika Roy",
    date: "Apr 29, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    tag: "Design",
    title: "Color Theory for Digital Products",
    excerpt: "Build palettes that communicate trust, energy, and clarity.",
    author: "Marco Vega",
    date: "Apr 25, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    tag: "Development",
    title: "TypeScript Tricks for 2026",
    excerpt: "Utility types, template literals, and conditional types demystified.",
    author: "Priya Nair",
    date: "Apr 20, 2026",
    readTime: "8 min read",
  },
  {
    id: 6,
    tag: "Career",
    title: "How to Write That Nobody Ignores",
    excerpt: "Clarity, rhythm, and punch — the fundamentals of writing that lands.",
    author: "Sara Malik",
    date: "Apr 15, 2026",
    readTime: "3 min read",
  },
];

const tagColors: Record<string, string> = {
  Design: "bg-blue-50 text-blue-700",
  Development: "bg-green-50 text-green-700",
  Productivity: "bg-yellow-50 text-yellow-700",
  Career: "bg-purple-50 text-purple-700",
};

const navLinks = ["Articles", "Topics", "Authors", "About"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-mauve-200 font-[system-ui,-apple-system,sans-serif] text-[#313131]">
      {/* Navbar */}
      <header className="bg-white border-b border-[#D9D9D9] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          <a href="#" className="text-xl font-semibold text-[#000000] tracking-tight">
            HowILearnedIt
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-[#313131] hover:text-[#0000EE] transition-colors duration-200 cursor-pointer"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-[#0000EE] hover:text-[#0000CC] transition-colors duration-200 cursor-pointer underline"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-semibold bg-[#0000EE] hover:bg-[#0000CC] active:bg-[#00009B] text-white px-5 py-2 rounded cursor-pointer transition-colors duration-200 min-h-[44px] flex items-center"
            >
              Start writing
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer min-w-[44px] min-h-[44px] items-center justify-center"
          >
            <span className={`block w-5 h-0.5 bg-[#313131] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#313131] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#313131] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#D9D9D9] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-[#313131] hover:text-[#0000EE] transition-colors duration-200 cursor-pointer">
                {link}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-[#D9D9D9]">
              <a href="#" className="text-sm text-[#0000EE] underline cursor-pointer">Sign in</a>
              <a href="#" className="text-sm font-semibold bg-[#0000EE] text-white px-4 py-2 rounded cursor-pointer">Start writing</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="bg-white border-b border-[#D9D9D9]">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
            <span className="inline-block text-xs font-semibold text-[#0000EE] uppercase tracking-widest mb-4">
              Ideas Worth Reading
            </span>
            <h1 className="font-Quintessential text-4xl md:text-7xl font-extrabold text-[#000000] leading-tight mb-6 max-w-2xl mx-auto">
              Thoughtful writing for curious minds
            </h1>
            <p className="text-base text-[#313131] leading-relaxed max-w-xl mx-auto mb-10">
              Deep dives on design, development, and the craft of building products people love.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#posts"
                className="font-semibold bg-[#0000EE] hover:bg-[#0000CC] text-white px-6 py-3 rounded cursor-pointer transition-colors duration-200 min-h-[48px] flex items-center justify-center"
              >
                Browse articles
              </a>
              <a
                href="#newsletter"
                className="font-semibold bg-white hover:bg-neutral-50 text-[#0000EE] border-2 border-[#0000EE] hover:border-[#0000CC] hover:text-[#0000CC] px-6 py-3 rounded cursor-pointer transition-all duration-200 min-h-[48px] flex items-center justify-center"
              >
                Subscribe free
              </a>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-white border-b border-[#D9D9D9]">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex flex-wrap justify-center gap-8 md:gap-16">
            {[["120+", "Articles"], ["18K", "Readers"], ["32", "Authors"], ["Weekly", "Updates"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-semibold text-[#000000]">{val}</p>
                <p className="text-xs text-[#313131] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section id="posts" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-semibold text-[#000000]">Latest articles</h2>
            <a href="#" className="text-sm text-[#0000EE] hover:text-[#0000CC] underline transition-colors duration-200 cursor-pointer">
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#D9D9D9] rounded p-8 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col"
              >
                <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${tagColors[post.tag] ?? "bg-neutral-100 text-[#313131]"}`}>
                  {post.tag}
                </span>
                <h3 className="text-lg font-semibold text-[#000000] leading-snug mb-3 hover:text-[#0000EE] transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-sm text-[#313131] leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#D9D9D9]">
                  <span className="text-xs text-[#313131] font-medium">{post.author}</span>
                  <div className="flex items-center gap-2 text-xs text-[#313131]">
                    <span>{post.date}</span>
                    <span className="text-[#D9D9D9]">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Featured topic strip */}
        <section className="bg-white border-y border-[#D9D9D9]">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
            <h2 className="text-2xl font-semibold text-[#000000] mb-8">Browse by topic</h2>
            <div className="flex flex-wrap gap-3">
              {["Design", "Development", "Productivity", "Career", "Writing", "Business", "Technology", "Open Source"].map((topic) => (
                <a
                  key={topic}
                  href="#"
                  className="text-sm font-medium text-[#313131] bg-neutral-50 hover:bg-neutral-100 border border-[#D9D9D9] px-4 py-2 rounded cursor-pointer transition-colors duration-200 min-h-[44px] flex items-center"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-white border border-[#D9D9D9] rounded p-8 md:p-12 shadow-sm max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">Stay in the loop</h2>
            <p className="text-sm text-[#313131] leading-relaxed mb-8">
              Get the best articles delivered to your inbox every week. No spam, unsubscribe anytime.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-green-700 font-medium text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                You're subscribed!
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="email-input" className="sr-only">Email address</label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="you@example.com"
                  className="flex-1 border border-[#D9D9D9] rounded px-4 py-3 text-sm font-[Arial,sans-serif] text-[#313131] placeholder:text-[#999999] placeholder:italic focus:outline-none focus:border-[#0000EE] focus:ring-4 focus:ring-blue-100 transition-all duration-200 min-h-[48px]"
                />
                <button
                  onClick={handleSubscribe}
                  className="font-semibold bg-[#0000EE] hover:bg-[#0000CC] active:bg-[#00009B] text-white px-6 py-3 rounded cursor-pointer transition-colors duration-200 min-h-[48px] whitespace-nowrap text-sm"
                >
                  Subscribe
                </button>
              </div>
            )}

            <p className="text-xs text-[#999999] mt-4">No spam. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D9D9D9]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-semibold text-[#000000]">Writewise</p>
          <nav className="flex flex-wrap justify-center gap-6">
            {["Articles", "Topics", "Authors", "About", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-[#0000EE] hover:text-[#0000CC] underline transition-colors duration-200 cursor-pointer"
              >
                {link}
              </a>
            ))}
          </nav>
          <p className="text-xs text-[#313131]">© 2026 Writewise</p>
        </div>
      </footer>
    </div>
  );
}
