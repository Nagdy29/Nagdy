"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowRightDownLine } from "react-icons/ri";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a web developer with a strong background in creating dynamic and responsive websites using modern web technologies. My expertise includes:",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development:",
    description:
      "Skilled in HTML, CSS, JavaScript, and popular frameworks like React.js",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Proficient in building robust server-side applications using Node.js and Express",
    href: "",
  },
  {
    num: "04",
    title: "Full-Stack Development",
    description:
      "Experienced in the MERN stack (MongoDB, Express, React, Node.js) to deliver end-to-end web solutions",
    href: "",
  },
];

const page = () => {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2  gap-[60px]"
          >
            {services.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col gap-6 group justify-center"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="text-5xl font-extrabold text-outline text-transparent hover:text-green-900">
                      {ele.num}
                    </div>
                    <Link
                      href={ele.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-green-700 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <RiArrowRightDownLine className="text-3xl text-black" />
                    </Link>
                  </div>
                  <h2 className="font-bold text-white hover:text-green-700 text-[42px]">
                    {" "}
                    {ele.title}{" "}
                  </h2>
                  <p className="text-white/60"> {ele.description} </p>
                  <div className="border-b border-white/20  w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default page;
