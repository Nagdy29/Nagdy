import Photo from "@/components/Photo";
import { Socail } from "@/components/Socail";
import { Status } from "@/components/Status";

export default function Home() {
  return (
    <main>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex justify-between flex-col xl:flex-row items-center xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-lg">Mern Stack Developer</span>
              <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-5">
                Hello I'm <br />{" "}
                <span className="text-green-800">Mohamed Mostafa</span>{" "}
              </h1>
              <p className="max-w-[800px] mb-9 text-white/50">
                {" "}
                As a passionate MERN stack developer, I specialize in building
                dynamic and responsive web applications using MongoDB,
                Express.js, React.js and Node.js. My web development journey has
                provided me with a strong foundation in both front-end and
                back-end technologies, enabling me to deliver comprehensive and
                effective solutions. Front-End Development: Proficient in
                React.js, Redux, HTML5, CSS3, and JavaScript (ES6+), with a keen
                interest in UI/UX design and responsive web development. Backend
                Development: Extensive experience with Node.js, Express.js and
                RESTful APIs, ensuring robust and scalable server-side
                applications
              </p>
              <div className="flex items-center flex-col xl:flex-row gap-5">
                <a
                  href="https://drive.google.com/file/d/1JkWRa_SAi1EAql3BX-V9R-8WCcEdOZic/view"
                  target="_blank"
                >
                  <button class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-green-700 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="24px"
                      width="24px"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Interface / Download">
                          {" "}
                          <path
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke="#f1f1f1"
                            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                            id="Vector"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    Download CV
                    <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                      DownloadCv
                    </div>
                  </button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Socail />
                </div>
              </div>
            </div>
            <div className="  order-1 xl:order-none mb-8 xl:mb-2">
              <Photo />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <Status />
        </div>
      </section>
    </main>
  );
}
