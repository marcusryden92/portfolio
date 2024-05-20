import "../index.css";
import { useContextAbout } from "../context/ContextAbout";
import { useEffect, useState } from "react";
import { usePageNav } from "../hooks/usePageNavigation";
import portrait from "../../public/images/portrait_mono.png";
import gecko from "../../public/images/gecko.png";

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
    if (!active) {
      setActive(true);
      setTimeout(() => {
        setIsFadedAbout(false);
      }, 50);
    }
  }, []);

  return (
    <>
      <div className="box center-viewport h-full w-full text-left md:max-w-[80%] max-h-[90%] my-10">
        <div className="flex justify-between w-full max-w-[100%] ">
          <div
            className={`border border-white text-custom ${
              !isFadedAbout ? "gallery-title" : "gallery-title--faded"
            } gallery-element font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            About
          </div>
          <div
            className={`border border-white md:mr-[10%] gallery-x ${
              !isFadedAbout ? "gallery-x" : "gallery-x--faded"
            } ${!isFadedAbout ? "hover-scale" : ""} gallery-element font-bold `}
            onClick={() => setFlipped(!flipped)}
          >
            &lt; Flip &gt;
          </div>
          <div
            className={`border border-white gallery-x ${
              !isFadedAbout ? "gallery-x" : "gallery-x--faded"
            } ${!isFadedAbout ? "hover-scale" : ""} gallery-element font-bold `}
            onClick={handleClickX}
          >
            X
          </div>
        </div>

        {/*Flip card below*/}
        <div
          className={`flip-card h-full max-h-[90%] w-full my-6 md:w-full  ${
            isFadedAbout ? "about-container--faded" : "about-container"
          } ${flipped ? "flipped" : ""}`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front overflow-scroll no-scroll flex flex-col md:flex-row bg-white border border-2">
              <div className="flex flex-col md:max-w-[50%]">
                <div className="flex flex-col p-10 flex-grow font-medium md:text-[1.2vw]">
                  Hello!
                  <br />
                  <br />
                  <div className="md:text-[0.9vw]">
                    I'm Marcus. I've studied industrial design at LTH, and more
                    recently front-end development at Hyper Island. In my spare
                    time I try to exercise and read difficult books, with some
                    assistance from my pet leopard gecko Scheherazade.
                  </div>
                </div>
                <img
                  src={gecko}
                  className="hidden md:block md:h-1/2 md:w-1/2 object-contain m-10 px-5 items-end"
                />
              </div>
              <img
                className="md:h-[35vw] self-end"
                src={portrait}
                alt="Marcus"
              />
            </div>
            <div className="flip-card-back overflow-hidden bg-black">
              <div className="flex flex-col p-10 space-y-8">
                <div className="flex space-x-10">
                  <div className="text-white w-1/3">
                    <p className="text-xl mb-2">Education</p>
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
                  <div className="text-white w-1/3">
                    <p className="text-xl mb-2">Work Experience</p>
                    <p className="font-bold mb-1">DHL COURIER</p>
                    <p className="text-sm mb-1">DHL, Malmö</p>
                    <p className="italic text-sm mb-4">2021/06 - 2021/08</p>
                    <p className="font-bold mb-1">PEST CONTROL</p>
                    <p className="text-sm mb-1">Nomor, Malmö</p>
                    <p className="italic text-sm mb-4">2017/08 - 2019/04</p>
                  </div>
                  <div className="text-white">
                    <p className="text-xl mb-2">Skills</p>
                    <p className="text-sm mb-1">Adobe Photoshop</p>
                    <p className="text-sm mb-1">Adobe Illustrator</p>
                    <p className="text-sm mb-1">Adobe InDesign</p>
                    <p className="text-sm mb-1">Autodesk Fusion 360</p>
                    <p className="text-sm mb-1">Maxwell Studio</p>
                    <p className="text-sm mb-4">Driver License (B)</p>
                    <p className="text-xl mb-2">Languages</p>
                    <p className="text-sm mb-1">Swedish</p>
                    <p className="text-sm mb-4">Native</p>
                    <p className="text-sm mb-1">English</p>
                    <p className="text-sm mb-1">
                      Cambridge Certificate in Advanced English
                    </p>
                    <p className="text-sm mb-1">French</p>
                    <p className="text-sm">School Basics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
