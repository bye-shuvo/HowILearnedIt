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
        <section id="stats" className="w-full flex tablet-lg:gap-5 gap-3 tablet-lg:pb-10 pb-5 items-center justify-center">
          {STATS.map((stat, index) => {
            return (
              <div
                key={index}
                className="p-5 w-full flex flex-col gap-3 items-center bg-offset-white-hover"
              >
                <p className="text-3xl tablet-lg:text-5xl font-blog-content">
                  {stat.data}
                </p>
                <p className="text-sm tablet-lg:text-md font-blog-content">
                  {stat.topic}
                </p>
              </div>
            );
          })}
        </section>
  )
}

export default Stats
