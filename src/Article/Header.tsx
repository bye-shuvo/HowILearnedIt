import React from "react";
import type { Article } from "../Archive/types";
import H1 from "../utils/H1";

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
      className="flex flex-col laptop-lg:gap-3 laptop-lg:pb-5"
    >
      <p className="laptop-lg:text-xl">{article.tag}</p>
      <h1 className="font-Quintessential laptop-lg:text-7xl leading-tight">
        {article.title}
      </h1>
      <div className="flex gap-3 items-center laptop-lg:py-5">
        <img
          className="h-9 w-9 rounded-full object-center"
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
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                className="fill-text"
                d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"
              />
            </svg>
            <p>Share</p>
          </button>
          <button
            id="copy-article-link"
            className="flex flex-col items-center px-3 py-2
        hover:cursor-pointer hover:bg-offset-white-hover"
            onClick={handleCopy}
          >
            <svg
              className="h-5 w-5"
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
