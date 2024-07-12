"use client ";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import { FaSass } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

const about = {
  title: "About Me",
  desc: "As a passionate MERN stack developer, I specialize in buildingdynamic and responsive web applications using MongoDB,  Express.js, React.js and Node.js. My web development journey has  provided me with a strong foundation in both front-end and  back-end technologies, enabling me to deliver comprehensive and  effective solutions. Front-End Development: Proficient in  React.js, Redux, HTML5, CSS3, and JavaScript (ES6+), with a keen  interest in UI/UX design and responsive web development. Backend  Development: Extensive experience with Node.js, Express.js and  RESTful APIs, ensuring robust and scalable server-side  applications",
  info: [
    {
      name: "name",
      value: "mohamed",
    },
    {
      name: "phone",
      value: "012745124513",
    },
    {
      name: "experience",
      value: "1+ years",
    },
    {
      name: "email",
      value: "mhamedmostafa257@gmail.com",
    },
    {
      name: "Freelance",
      value: "Available",
    },
  ],
};
// education data
const education = {
  icon: "",
  title: "Education",
  description:
    "Bachelor's Degree in Computers and Artificial IntelligenceBeni-Suef University, Egypt 2020 - 2024",
};
// experience data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "Experienced Front-End Developer with over a year of experience in developing and designing user interfaces using modern web technologies. I possess strong skills in HTML, CSS, JavaScript, and frameworks like React.js. I excel in transforming designs and ideas into interactive and responsive web applications. I work efficiently within cross-functional teams to ensure the delivery of software solutions that meet user needs and achieve business objectives..",

  items: [
    {
      company: "FreeLance",
      position: "Front End",
      duration: "2023",
    },
    {
      company: "FreeLance",
      position: "Front End",
      duration: "2024",
    },
  ],
};

const Skills = {
  title: "Skills",
  description: "Mern Stack Developer",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <BiLogoTailwindCss />,
      name: "TailwindCss",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: " Java Script",
    },
    {
      icon: <SiNextdotjs />,
      name: " Next Js",
    },
    {
      icon: <FaReact />,
      name: " React",
    },
    {
      icon: <SiExpress />,
      name: " Express",
    },
    {
      icon: <BiLogoMongodb />,
      name: " Mongodb",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <FaSass />,
      name: "Sass ",
    },
    {
      icon: <DiJqueryLogo />,
      name: "Jquery",
    },
  ],
};
const page = () => {
  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8">
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experinence">Experience</TabsTrigger>
              <TabsTrigger value="eduction">Eduction</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about me">About me</TabsTrigger>
            </TabsList>
            {/* contant */}
            <div className="min-h-[70vh] w-full ">
              <TabsContent value="experinence" className="w-full">
                <div className="flex flex-col xl:text-left text-center gap-[30px]">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea>
                    <ul className=" grid grid-cols-1  lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((el, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                          >
                            <span className="text-green-600 font-semibold">
                              {" "}
                              {el.duration}{" "}
                            </span>
                            <h2 className="text-lg max-w-[260px] min-h-[40px] text-center lg:text-left font-extralight">
                              {" "}
                              {el.position}{" "}
                            </h2>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-green-800"></span>
                              <p className="text-white/60">{el.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="eduction" className="w-full">
                <div className="flex flex-col xl:text-left text-center gap-[30px]">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {education.description}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col xl:text-left text-center gap-[30px]">
                  <h3 className="text-4xl font-bold">{Skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {Skills.description}
                  </p>
                  <ScrollArea>
                    <ul className=" grid grid-cols-2 sm:grid-cols-3   md:grid-cols-4 xl:gap-[30px]">
                      {Skills.items.map((el, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329]  w-full h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 "
                          >
                            <span className="text-6xl hover:text-green-600 font-semibold">
                              {" "}
                              {el.icon}{" "}
                            </span>
                            <h2 className="text-lg max-w-[260px] min-h-[40px] text-center lg:text-left font-extralight">
                              {" "}
                              {el.name}{" "}
                            </h2>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="about me" className="w-full">
                <div className="flex flex-col xl:text-left text-center gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {about.desc}
                  </p>
                  <ScrollArea>
                    <ul className=" grid grid-cols-1  xl:grid-cols-2 gap-y-6  max-w-[620px]  gap-[20px] mx-auto xl:mx-0 ">
                      {about.info.map((el, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center xl:justify-start gap-4"
                          >
                            <span className="text-white/60 font-semibold">
                              {" "}
                              {el.name}{" "}
                            </span>
                            <h2 className="text-xl">{el.value} </h2>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default page;
