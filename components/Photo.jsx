"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
const Photo = () => {
  return (
    <>
      <div className=" w-full relative">
        <div>
          <div className="w-[298px] h-[298] xl:w-[359px] xl:h-[358px] mix-blend-lighten  image-h">
            <img
              src="/assent/Untitled.jpg"
              priority
              quality={100}
              // width={250}
              // height={250}
              alt=""
              className="object-contain w-[280px] h-[280px]  xl:w-[350px] xl:h-[350px]  "
            />
          </div>
        </div>
        <motion.svg
          className="w-[400] xl:w-[706] h-[400] xl:h-[706] absolute top-[16px] left-0 right-1 "
          fill="transparent"
          viewBox="0 0 506 506 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
    </>
  );
};

export default Photo;
