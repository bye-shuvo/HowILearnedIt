import React, { useEffect, useRef, useState } from 'react'
import type { articleInput } from './input';

const ArticleTopics = ({input} : {input : articleInput}) => {
    const [topics, setTopics] = useState<string[]>([]);
    const [currentTopic, setCurrentTopic] = useState<string>("");
    const topicElementRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTopic(e.target.value);
    }

    const handleAddTopic = (e : KeyboardEvent) => {
        if(e.key === "Enter"){
            e.preventDefault();
            if(currentTopic.trim()){
                setTopics(prev => [...prev , currentTopic.trim().split(" ").join("")]);
                setCurrentTopic("");
            }
        }
    }

    useEffect(() => {
        const element = topicElementRef.current;
        if(!element) return;
        
        element.addEventListener("keydown" , handleAddTopic);
        return () => element.removeEventListener("keydown" , handleAddTopic);
    },[currentTopic]);
  return (
    <div ref={topicElementRef} id={input.elementId} className="flex items-center gap-2 max-w-full overflow-x-scroll scrollbar-none relative h-10 w-full ring-1 ring-text px-2">
      {
        topics.map((topic, index) => {
           return <p key={index} className="px-2 h-[70%] ring-1 ring-text text-center text-nowrap">{topic}</p>
        })
      }
      <input onChange={handleInputChange} value={currentTopic} id={input.fieldName} type="text" className="h-full w-full px-2 py-1 outline-none"/>
    </div>
  )
}

export default ArticleTopics
