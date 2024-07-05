import "../index.css";
import { useContextAbout } from "../context/ContextAbout";
import { useEffect, useState } from "react";
import { usePageNav } from "../hooks/usePageNavigation";

import portrait from "../../public/images/portrait_mono.png";
import gecko from "../../public/images/gecko.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function About({ handleClickClear }) {
  const { isFadedAbout, setIsFadedAbout } = useContextAbout();
  const [flipped, setFlipped] = useState(false);
  const [active, setActive] = useState(false);

  const { resetClickedStates } = usePageNav();

  function handleClickX() {
    setIsFadedAbout(true);
    setTimeout(resetClickedStates, 1000);
  }

  useEffect(() => {
    setIsFadedAbout(false); // Set initial state of isFadedAbout
  }, []);

  return (
    <>
      <div className="box center-viewport h-full w-full text-left xl:max-w-[70%] max-h-[90%] px-[3%] xl:px-0 my-10">
        <div className="flex justify-between w-full max-w-[100%]">
          <div
            className={`text-[1.7rem] xl:text-custom   ${
              !isFadedAbout ? "gallery-title" : "gallery-title--faded"
            } gallery-element font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            About
          </div>
          <div
            className={`text-[1.7rem] xl:text-custom xl:mr-[3%]  ${
              !isFadedAbout ? "gallery-title" : "gallery-title--faded"
            } ${!isFadedAbout ? "hover-scale" : ""} gallery-element font-bold `}
            onClick={() => setFlipped(!flipped)}
          >
            &lt; Flip &gt;
          </div>
          <div
            className={`gallery-x ${
              !isFadedAbout ? "gallery-x" : "gallery-x--faded"
            } ${!isFadedAbout ? "hover-scale" : ""} gallery-element font-bold `}
            onClick={handleClickX}
          >
            <IoClose className="size-[40px] lg:size-[2.5vw] lg:mt-[-0.5vw]" />
          </div>
        </div>

        {/* Flip card */}
        <div
          className={`flip-card h-full xl:max-h-[90%] w-full mt-6 md:w-full ${
            isFadedAbout ? "about-container--faded" : "about-container"
          } ${flipped ? "flipped" : ""}`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-back overflow-hidden bg-white border-2">
              <div className="flex flex-col p-6 xl:p-10 space-y-8 text-center xl:text-left">
                <div className="flex flex-col xl:flex-row justify-around xl:px-[10%] xl:space-x-10">
                  <div className="text-secondary text-sm xl:border-r-2 rounded-none xl:px-[5%] mb-10 xl:mb-0">
                    <p className="text-lg mb-2 font-bold">Education</p>
                    <p className=" text-sm font-bold mb-1">
                      FRONT END DEVELOPER PROGRAM
                    </p>
                    <p className="text-sm mb-1">Hyper Island, Stockholm</p>
                    <p className="italic text-sm mb-4">2023 - 2025</p>
                    <p className="font-bold text-sm mb-1">
                      INDUSTRIAL DESIGN PROGRAM
                    </p>
                    <p className="text-sm mb-1">
                      Lund University School of Industrial Design, Lund
                    </p>
                    <p className="italic text-sm mb-4">2019 - 2022</p>
                    <p className="font-bold text-sm mb-1">
                      GRAPHICAL DESIGN INTRODUCTION COURSE
                    </p>
                    <p className="text-sm mb-1">
                      Lund University School of Architecture, Lund
                    </p>
                    <p className="italic text-sm mb-4">2021/04 - 2021/07</p>
                    <p className="font-bold mb-1">
                      INDUSTRIAL ECONOMY SUMMER COURSE
                    </p>
                    <p className="text-sm mb-1">Linneaus University, Växjö</p>
                    <p className="italic text-sm mb-4">2020/07 - 2020/08</p>
                    <p className="font-bold mb-1">BIOMEDICAL FOUNDATION YEAR</p>
                    <p className="text-sm mb-1">Malmö University</p>
                    <p className="italic text-sm">2011 - 2012</p>
                  </div>
                  {/* <div className="text-black w-1/3">
                    <p className="text-xl mb-2">Work Experience</p>
                    <p className="font-bold mb-1">DHL COURIER</p>
                    <p className="text-sm mb-1">DHL, Malmö</p>
                    <p className="italic text-sm mb-4">2021/06 - 2021/08</p>
                    <p className="font-bold mb-1">PEST CONTROL</p>
                    <p className="text-sm mb-1">Nomor, Malmö</p>
                    <p className="italic text-sm mb-4">2017/08 - 2019/04</p>
                  </div> */}
                  <div className="text-secondary pr-[5%] rounded-none">
                    <p className="text-lg mb-2 font-bold">
                      Languages/Frameworks
                    </p>
                    <p className="text-sm mb-1">HTML/CSS</p>
                    <p className="text-sm mb-1">Javascript</p>
                    <p className="text-sm mb-1">React</p>
                    <p className="text-sm mb-1">Node.js</p>
                    <p className="text-sm mb-1">PostgreSQL</p>
                    <p className="text-sm mb-1">GSAP</p>
                    <p className="text-sm mb-1">Express.js</p>

                    <br></br>

                    <p className="text-lg mb-2 font-bold">Skills</p>
                    <p className="text-sm mb-1">Adobe Photoshop</p>
                    <p className="text-sm mb-1">Adobe Illustrator</p>
                    <p className="text-sm mb-1">Adobe InDesign</p>
                    <p className="text-sm mb-1">Autodesk Fusion 360</p>
                    <p className="text-sm mb-1">Maxwell Studio</p>
                    <p className="text-sm mb-4">Driver License (B)</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flip-card-front min-h-[1000px] xl:min-h-0 selectable justify-center xl:justify-start
              overflow-scroll xl:overflow-hidden no-scroll flex flex-col 
            md:flex-row bg-white border-2"
            >
              <div className="flex flex-col text-secondary xl:min-w-[50%] xl:border-r-2 rounded-none px-10 my-20 gap-1 items-center justify-center ">
                <p className="font-bold text-[2rem] xl:text-[1.5vw] pb-5">
                  Contact
                </p>{" "}
                <p className="text-[1rem] xl:text-[1.2vw]  font-medium border-b-2 pb-5">
                  MARCUS.RYDEN@HYPERISLAND.SE
                </p>{" "}
                <p className="text-[1.5rem] xl:text-[1.5vw]  font-medium pb-5">
                  (+46) 720 40 99 96
                </p>{" "}
                <div className="flex gap-[1vw]">
                  <a
                    href="https://www.linkedin.com/in/marcus-ryd%C3%A9n-4bb244140/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="size-[40px] lg:size-[2.5vw]" />
                  </a>
                  <a
                    href="https://github.com/marcusryden92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="size-[40px] lg:size-[2.5vw]" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col text-secondary">
                <div className="flex flex-col gap-1 p-10 xl:text-[0.9vw] flex-grow">
                  <p className="xl:text-[1.2vw] font-bold">
                    Hello! I'm Marcus.
                  </p>
                  <p>
                    I'm passionate about using technical skills to solve design
                    problems. I have always been drawn to the intersection of
                    creativity and technology. Thriving in social environments,
                    I enjoy collaborating with others to bring ideas to life.{" "}
                  </p>
                  <p>
                    {" "}
                    Currently, I'm deepening my expertise in front-end
                    development at Hyper Island in Stockholm, where I'm excited
                    to merge my design background with coding proficiency to
                    create impactful digital experiences.
                  </p>
                </div>
                <img
                  className="xl:absolute bottom-0 md:h-[60%] self-end"
                  src={portrait}
                  alt="Marcus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
