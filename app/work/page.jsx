"use client";
// import Swiper styles
import "swiper/css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VscLiveShare } from "react-icons/vsc";

const projects = {
  front: [
    {
      num: "01",
      category: "Front End",
      title: "Dive Website",
      des: "",
      stack: [{ name: "Html 5" }, { name: "React" }, { name: "Tailwind Css" }],
      image: "/assent/div.png",
      live: "https://dive-website-hazel.vercel.app/",
      github: "https://github.com/Nagdy29/DiveWebsite",
    },
    {
      num: "01",
      category: "Front End",
      title: "NikeWebsites",
      des: "",
      stack: [{ name: "Html 5" }, { name: "React" }, { name: "Bootstrab" }],
      image: "/assent/nik.png",
      live: "https://nike-website-fawn-six.vercel.app/",
      github: "https://github.com/Nagdy29/NikeWebsite",
    },
    {
      num: "01",
      category: "Front End",
      title: "Hotel Website",
      des: "",
      stack: [{ name: "Html 5" }, { name: "React" }, { name: "Bootstrab" }],
      image: "/assent/hot.png",
      live: "https://hotel-website-tan.vercel.app/",
      github: "https://github.com/Nagdy29/Hotel-Website",
    },
    {
      num: "01",
      category: "Front End",
      title: "Market Website",
      des: "",
      stack: [{ name: "Html 5" }, { name: "React" }, { name: "Bootstrab" }],
      image: "/assent/mar.png",
      live: "https://dem-markett.vercel.app/",
      github: "https://github.com/Nagdy29/dem-Markett",
    },
  ],

  mern: [
    {
      num: "04",
      category: "MernStack",
      title: "Movies Website",
      des: "",
      stack: [
        { name: "Html 5" },
        { name: "React" },
        { name: "Bootsrab.css" },
        { name: "Node js" },
      ],
      image: "/assent/mo.png",
      live: "https://movies-react-nine-phi.vercel.app/",
      github: "https://github.com/Nagdy29/Movies-react",
    },
    {
      num: "01",
      category: "Mern Stack",
      title: "Elearing Website",
      des: "",
      stack: [
        { name: "Html 5" },
        { name: "React" },
        { name: "Bootstrab" },
        { name: "Node js" },
        { name: "Mongooes" },
      ],
      image: "/assent/ele.png",
      live: "https://graduation-project-three-zeta.vercel.app/",
      github: "https://github.com/Nagdy29/Graduation-Project",
    },
    {
      num: "01",
      category: "Mern Stack",
      title: "Hosbital Website",
      des: "",
      stack: [
        { name: "Html 5" },
        { name: "React" },
        { name: "Bootstrab" },
        { name: "Node js" },
        { name: "Mongooes" },
      ],
      image: "/assent/hos.png",
      live: "https://hospital-management-system-dk8c.vercel.app/",
      github: "https://github.com/Nagdy29/Hospital-Management-System",
    },
  ],
};

const page = () => {
  const handelChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="mx-auto container">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="Front End">Front End</TabsTrigger>
              <TabsTrigger value="Mern">Mern Stack</TabsTrigger>
            </TabsList>
            {/* contant */}
            <div className="min-h-[70vh] w-full ">
              <TabsContent value="Front End" className="w-full">
                <div className="flex flex-col xl:text-left text-center gap-[30px]">
                  <ScrollArea>
                    <ul className=" grid grid-cols-1 md:grid-cols-2 gap-10  md:gap-12   xl:gap-[30px]">
                      {projects.front.map((el, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329]  w-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 "
                          >
                            <div class="max-w-md rounded overflow-hidden shadow-lg gap-3">
                              <img
                                class="w-full"
                                src={el.image}
                                alt="Sunset in the mountains"
                              />
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                  {el.category}
                                </div>
                                <p class="text-gray-700 text-base">
                                  {el.title}
                                </p>
                              </div>
                              <div class="px-6 pt-4 pb-2 flex  gap-5">
                                <a href={el.github} target="_blank">
                                  <div class="group relative">
                                    <button>
                                      <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                                      >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                      </svg>
                                    </button>
                                    <span
                                      class="absolute -top-14 left-[10%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-black"
                                    >
                                      GitHub<span></span>
                                    </span>
                                  </div>
                                </a>
                                <a href={el.live} target="_blank">
                                  <div class="group relative">
                                    <button>
                                      <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                                      >
                                        <VscLiveShare size={25} />
                                      </svg>
                                    </button>
                                    <span
                                      class="absolute -top-14 left-[10%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-black"
                                    >
                                      Live<span></span>
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="Mern" className="w-full">
                <div className="flex flex-col xl:text-left text-center gap-[30px]">
                  <ScrollArea>
                    <ul className=" grid grid-cols-1 md:grid-cols-2 gap-10  xl:gap-[30px]">
                      {projects.mern.map((el, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329]  w-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 "
                          >
                            <div class="max-w-md rounded overflow-hidden shadow-lg">
                              <img
                                class="w-full"
                                src={el.image}
                                alt="Sunset in the mountains"
                              />
                              <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                  {el.category}
                                </div>
                                <p class="text-gray-700 text-base">
                                  {el.title}
                                </p>
                              </div>
                              <div class="px-6 pt-4 pb-2 flex  gap-5">
                                <a href={el.github} target="_blank">
                                  <div class="group relative">
                                    <button>
                                      <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                                      >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                      </svg>
                                    </button>
                                    <span
                                      class="absolute -top-14 left-[10%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-black"
                                    >
                                      GitHub<span></span>
                                    </span>
                                  </div>
                                </a>
                                <a href={el.github} target="_blank">
                                  <div class="group relative">
                                    <button>
                                      <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                                      >
                                        <VscLiveShare size={25} />
                                      </svg>
                                    </button>
                                    <span
                                      class="absolute -top-14 left-[10%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-black"
                                    >
                                      Live<span></span>
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
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
      </section>
    </>
  );
};

export default page;
