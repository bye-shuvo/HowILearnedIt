import React, { useEffect, useRef, useState } from "react";
import type { articleInput } from "./input";

const ArticleTopics = ({ input }: { input: articleInput }) => {
  const [topics, setTopics] = useState<string[]>([]);
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const topicElementRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTopic(e.target.value);
  };

  const handleAddTopic = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentTopic.trim()) {
        setTopics((prev) => [...prev, currentTopic.trim().split(" ").join("")]);
        setCurrentTopic("");
      }
    }
  };

  const handleRemoveTopic = (index: number) => {
    setTopics((prev) => {
      return prev.filter((_, idx) => idx !== index);
    });
  };

  const keyboardToRemove = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      setTopics((prev : string[]) => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        return prev;
      });
    }
  };

  useEffect(() => {
    const element = topicElementRef.current;
    if (!element) return;

    element.addEventListener("keydown", handleAddTopic);
    element.addEventListener("keydown", keyboardToRemove);
    return () => {
      element.removeEventListener("keydown", handleAddTopic);
      element.removeEventListener("keydown", keyboardToRemove);
    };
  }, [currentTopic]);
  return (
    <div
      ref={topicElementRef}
      id={input.elementId}
      className="flex items-center gap-2 max-w-full overflow-x-scroll scrollbar-none relative h-10 w-full ring-1 ring-text px-2"
    >
      {topics.map((topic, index) => {
        return (
          <p
            key={index}
            className="px-2 h-[70%] ring-1 ring-offset-white text-center text-nowrap flex items-center gap-2 bg-text/50 text-offset-white"
          >
            {topic}{" "}
            <svg
              onClick={() => handleRemoveTopic(index)}
              className="h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                className="fill-offset-white"
                d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z"
              />
            </svg>
          </p>
        );
      })}
      <input
        onChange={handleInputChange}
        value={currentTopic}
        id={input.fieldName}
        type="text"
        className="h-full w-full px-2 py-1 outline-none"
      />
    </div>
  );
};

export default ArticleTopics;
