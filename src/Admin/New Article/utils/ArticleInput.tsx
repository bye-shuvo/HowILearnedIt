import type { articleInput } from "./input.ts";
import ImageUploader from "./ImageUploader.tsx";
import ContentEditor from "./ContentEditor.tsx";
import CategorySelector from "./CategorySelector.tsx";
import type { Key } from "react";
import StatusSetter from "./StatusSetter.tsx";

const ArticleInput = ({
  input,
  index,
}: {
  input: articleInput;
  index?: Key;
}) => {
  return (
    <div
      key={index}
      id={input.elementId}
      className="flex flex-col gap-1 text-text laptop-lg:pb-5"
    >
      <label htmlFor={input.fieldName} className="text-sm">
        {input.labelName}
      </label>
      {input.fieldName === "content" ? (
        <ContentEditor input={input} />
      ) : input.fieldName === "category" ? (
        <CategorySelector input={input} />
      ) : input.fieldName === "cover" ? (
        <ImageUploader input={input} />
      ) :input.fieldName === "status" ? (
        <StatusSetter input={input} />
      ) : (
        <input
          key={index}
          id={input.fieldName}
          type="text"
          className="ring-1 ring-text px-2 py-1"
        />
      )}
    </div>
  );
};

export default ArticleInput;
