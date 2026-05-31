import React from 'react'
import type { stats } from '../types';

const Stats = () => {
      const STATS: stats[] = [
    {
      topic: "Total Articles",
      data: "30+",
    },
    {
      topic: "Monthly Views",
      data: "3k+",
    },
  ];
  return (
        <section id="stats" className="flex gap-5 tablet-lg:pb-10">
          {STATS.map((stat, index) => {
            return (
              <div
                key={index}
                className="p-5 tablet-lg:px-40 flex flex-col gap-3 items-center bg-offset-white-hover"
              >
                <p className="tablet-lg:text-5xl font-blog-content">
                  {stat.data}
                </p>
                <p className="tablet-lg:text-md font-blog-content">
                  {stat.topic}
                </p>
              </div>
            );
          })}
        </section>
  )
}

export default Stats
