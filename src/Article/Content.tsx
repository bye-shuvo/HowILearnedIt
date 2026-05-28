import { useEffect, useState } from "react";
import type { Article } from "../Archive/types.ts";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import '../utils/markdown.css'

const Content = (_props: { article: Article }) => {
  const [html, setHtml] = useState("");
  useEffect(() => {
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype , {allowDangerousHtml: true})
      .use(rehypeRaw)
      .use(rehypeSanitize)
      .use(rehypeStringify);

    const value = `
  
  ## On discipline, restraint, and the architecture of thought
  
  Modern software systems often fail not because developers lack intelligence, but because they lack discipline.
  
  ## Why Simplicity Matters
  
  Simple systems are:
  - easier to maintain
  - easier to scale
  - easier to debug
  
  \`\`\`ts
  console.log("This is a code")
  \`\`\`

  ## Conclusion`;

    processor.process(value).then((file) => {
      setHtml(String(file));
    });
  }, []);

  return (
    <section className="w-full laptop-lg:py-10">
      <div
        id="markdown-content"
        className="w-full selection:bg-offset-white-hover"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </section>
  );
};

export default Content;
