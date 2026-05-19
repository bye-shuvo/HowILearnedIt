import React from "react";

interface info {
  topic: string;
  data: string;
}

const Info = () => {
  const info: info[] = [
    { topic: "Articles Published", data: "48+" },
    { topic: "Topics Covered", data: "12" },
    { topic: "Minutes Avg Read", data: "6" },
    { topic: "Readers Monthly", data: "3K+" },
    { topic: "Years Writing", data: "4" },
  ];
  return (
    <section
      id="info"
      className="relative top-[15%] flex items-center justify-center gap-15 max-w-full overflow-x-scroll overflow-hidden scrollbar-none pointer-events-none"
    >
      {info.map((info, index) => {
        return (
          <span
            key={index}
            className="text-center font-content-subtitle"
          >
            <p className="text-5xl text-text font-extrabold hover:text-shadow-text">
              {info.data}
            </p>
            <p className="text-xl mt-2">{info.topic}</p>
          </span>
        );
      })}
    </section>
  );
};

export default Info;
