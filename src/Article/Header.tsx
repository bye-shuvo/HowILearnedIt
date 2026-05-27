import React from "react";
import type { Article } from "../Archive/types";

const Header = ({ article }: { article: Article }) => {
  return (
    <section id="article-header" className="flex flex-col laptop-lg:gap-3">
      <p className="laptop-lg:text-xl">{article.tag}</p>
      <h1 className="font-Quintessential laptop-lg:text-7xl leading-tight">{article.title}</h1>
      <div className="flex gap-3 items-center laptop-lg:py-5">
        <img className="h-9 w-9 rounded-full object-center" src={article.author.avatarUrl || "https://robohash.org/4ee8109cc6350a819fbaa273d4cac0de?set=set4&bgset=&size=200x200"} alt="author" />
        <p>{article.author.name}</p>
        <p>{new Date(article.publishedAt).toDateString()}</p>
        <p>{article.readTime} read</p>
      </div>
      <div className="flex gap-3">
        
      </div>
    </section>
  );
};

export default Header;
