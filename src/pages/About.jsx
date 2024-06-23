import "../index.css";
import { useContextAbout } from "../context/ContextAbout";
import { useEffect, useState } from "react";
import { usePageNav } from "../hooks/usePageNavigation";

import portrait from "../../public/images/portrait_mono.png";
import gecko from "../../public/images/gecko.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
      <div className="box center-viewport h-full w-full text-left md:max-w-[70%] max-h-[90%] my-10">
        <div className="flex justify-between w-full max-w-[100%]">
          <div
            className={`text-custom ${
              !isFadedAbout ? "gallery-title" : "gallery-title--faded"
            } gallery-element font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            About
          </div>
          <div
            className={`md:mr-[3%] gallery-x ${
              !isFadedAbout ? "gallery-x" : "gallery-x--faded"
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
            X
          </div>
        </div>

        {/* Flip card */}
        <div
          className={`flip-card h-full max-h-[90%] w-full my-6 md:w-full ${
            isFadedAbout ? "about-container--faded" : "about-container"
          } ${flipped ? "flipped" : ""}`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front overflow-hidden bg-white border-2">
              <div className="flex flex-col p-10 space-y-8">
                <div className="flex justify-around px-[10%] space-x-10">
                  <div className="text-black border-r-2 rounded-none px-[5%]">
                    <p className="text-xl mb-2 font-bold">Education</p>
                    <p className="font-bold mb-1">
                      FRONT END DEVELOPER PROGRAM
                    </p>
                    <p className="text-sm mb-1">Hyper Island, Stockholm</p>
                    <p className="italic text-sm mb-4">2023 - 2025</p>
                    <p className="font-bold mb-1">INDUSTRIAL DESIGN PROGRAM</p>
                    <p className="text-sm mb-1">
                      Lund University School of Industrial Design, Lund
                    </p>
                    <p className="italic text-sm mb-4">2019 - 2022</p>
                    <p className="font-bold mb-1">
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
                  <div className="text-black pr-[5%] rounded-none">
                    <p className="text-xl mb-2 font-bold">
                      Languages/Frameworks
                    </p>
                    <p className="text-sm mb-1">HTML/CSS</p>
                    <p className="text-sm mb-1">Javascript</p>
                    <p className="text-sm mb-1">React</p>
                    <p className="text-sm mb-1">Node.js</p>
                    <p className="text-sm mb-1">PostgreSQL</p>
                    <p className="text-sm mb-1">GSAP</p>

                    <br></br>

                    <p className="text-xl mb-2 font-bold">Skills</p>
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
            <div className="flip-card-back selectable justify-center overflow-scroll no-scroll flex flex-col md:flex-row bg-white border-2">
              <div className="flex flex-col m-10 my-20 gap-5 items-center ">
                <p className="font-bold text-[2vw] pb-5">Contact</p>{" "}
                <p className="text-[1.5vw]  font-medium border-b-2 pb-5">
                  MARCUS.RYDEN@HYPERISLAND.SE
                </p>{" "}
                <p className="text-[1.5vw]  font-medium pb-5">
                  (+46) 720 40 99 96
                </p>{" "}
                <div className="flex gap-[1vw]">
                  <a
                    href="https://www.linkedin.com/in/marcus-ryd%C3%A9n-4bb244140/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="size-[2vw]" />
                  </a>
                  <a
                    href="https://github.com/marcusryden92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="size-[2vw]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
