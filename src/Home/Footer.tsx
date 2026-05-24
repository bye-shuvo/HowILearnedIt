import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const FOOTER_ITEMS = [
    {
      heading: "Explore",
      links: [
        { label: "Articles", href: "/articles" },
        { label: "Topics", href: "/topics" },
        { label: "Authors", href: "/authors" },
        { label: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "RSS Feed", href: "/rss.xml" },
      ],
    },
  ];
  return (
    <footer className="w-full h-fit laptop-lg:py-10 py-5">
      <p className="h-px w-full bg-text"></p>
      <h1 className="text-xl font-Quintessential py-5">HOWILEARNEDIT</h1>
      <div className="w-full grid grid-cols-1 laptop-lg:grid-cols-3 gap-3 pb-5">
        {FOOTER_ITEMS.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <p className="text-lg laptop-lg:text-xl font-blog-content font-bold mb-3">{item.heading}</p>
              <div className="flex flex-col gap-2 items-center">
                {item.links.map((link, index) => {
                  if (link.label === "Connect") {
                    return (
                      <a
                        key={index}
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    );
                  } else {
                    return (
                      <Link
                        key={index}
                        to={link.href}
                        className="hover:underline hover:underline-offset-2"
                      >
                        {link.label}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p className="flex items-center justify-center gap-1 laptop-lg:text-md text-sm"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="fill-text" d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM205.1 306.9c28.1 28.1 73.7 28.1 101.8 0 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-46.9 46.9-122.8 46.9-169.7 0s-46.9-122.8 0-169.7 122.8-46.9 169.7 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-28.1-28.1-73.7-28.1-101.8 0s-28.1 73.7 0 101.8z"/></svg> 2026-howilearnedit</p>
    </footer>
  );
};

export default Footer;
