import React from "react";
import type { Article } from "../Archive/types";

const Header = ({ article }: { article: Article }) => {
  const publishDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(article.publishedAt));

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    window.navigator.clipboard.writeText(window.location.href);
  };

  const handleShare = (e: React.MouseEvent) => {

  };

  return (
    <section
      id="article-header"
      className="flex flex-col gap-3 laptop-lg:pb-5 pb-3"
    >
      <p className="laptop-lg:text-xl text-lg">{article.tag}</p>
      <h1 className="font-Quintessential text-5xl laptop-lg:text-7xl leading-tight">
        {article.title}
      </h1>
      <div className="flex gap-2 laptop-lg:gap-3 items-center laptop-lg:py-5 laptop-lg:text-base text-sm">
        <img
          className="h-7 w-7 laptop-lg:h-9 laptop-lg:w-9 rounded-full object-center"
          src={
            article.author.avatarUrl ||
            "https://robohash.org/4ee8109cc6350a819fbaa273d4cac0de?set=set4&bgset=&size=200x200"
          }
          alt="author"
        />
        <p>{article.author.name} |</p>
        <p>{publishDate} |</p>
        <p>{article.readTime} read</p>
        <div id="links" className="laptop-lg:ml-5 flex text-sm">
          <button
            id="copy-article-link"
            className="flex flex-col items-center px-3 py-2
        hover:cursor-pointer hover:bg-offset-white-hover"
            onClick={handleShare}
          >
            <svg className="h-4 w-4 laptop-lg:h-5 laptop-lg:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="fill-text"d="M307.8 18.4c-12 5-19.8 16.6-19.8 29.6l0 80-112 0c-97.2 0-176 78.8-176 176 0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96l96 0 0 80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9z"/></svg>
            <p>Share</p>
          </button>
          <button
            id="copy-article-link"
            className="flex flex-col items-center px-3 py-2
        hover:cursor-pointer hover:bg-offset-white-hover"
            onClick={handleCopy}
          >
            <svg
              className="h-4 w-4 laptop-lg:h-5 laptop-lg:w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                className="fill-text"
                d="M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"
              />
            </svg>
            Copy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
