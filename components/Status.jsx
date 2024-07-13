"use client";

import CountUp from "react-countup";
import React from "react";

const stats = [
  {
    num: 1,
    text: " + Years Of Experience",
  },
  {
    num: 20,
    text: "Project Completed",
  },
  {
    num: 4,
    text: "Technologies mastered",
  },
  {
    num: 200,
    text: "Code Commits ",
  },
];
export const Status = () => {
  return (
    <>
      <section className="container mx-auto p-5">
        <div className="flex flex-col xl:flex-row xl:gap-16 gap-6 max-w-[80vw] xl:max-w-0">
          {stats.map((ele, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-8 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={ele.num}
                  delay={2}
                  duration={5}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className="leading-snug text-green-600">{ele.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
