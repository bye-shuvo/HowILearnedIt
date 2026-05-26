import React from "react";
import { useLocation } from "react-router-dom";
import Progressbar from "./Progressbar";
import Breadcrumb from "./Breadcrumb";
import Header from "./Header";
import type { Article } from "../Archive/types";

const Article = () => {
  const location = useLocation();
  const article : Article = location.state ;
  return (
    <div id="article">
      <Progressbar />
      <Breadcrumb category={article.tag} title={article.title}/>
      <Header article={article}/>
      <img className="w-full aspect-auto object-center object-cover" src={article.coverImage || "https://storage.ghost.io/c/0d/78/0d78b34c-0c5f-4975-900e-61d00ccb1c2d/content/images/size/w800/2026/01/workflow-template--2-.png"} alt={article.title} />
    </div>
  );
};

export default Article;
