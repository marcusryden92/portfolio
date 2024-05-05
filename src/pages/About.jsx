import "../index.css";
import { useContextAbout } from "../context/ContextAbout";
import { useEffect, useState } from "react";
import { usePageNav } from "../hooks/usePageNavigation";
import marcus from "../assets/marcus.jpg";

export default function About({ handleClickClear }) {
  const { isFadedAbout, setIsFadedAbout } = useContextAbout();
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
      <div className="box my-5 mx-20 p-10 text-left">
        <div className="flex justify-between w-full">
          <div
            className={`${
              !isFadedAbout ? "gallery-title" : "gallery-title--faded"
            } gallery-element w-40 font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            About
          </div>
          <div
            className={`gallery-x ${
              !isFadedAbout ? "gallery-x" : "gallery-x--faded"
            } ${
              !isFadedAbout ? "hover-scale" : ""
            } gallery-element w-10 font-bold `}
            onClick={handleClickX}
          >
            X
          </div>
        </div>

        {/*Flip card below*/}

        <div
          className={`flex justify-between bg-gray-transparent text-left h-[400px] w-[700px] ${
            isFadedAbout ? "about-container--faded" : "about-container"
          }`}
        >
          <div className="p-10">About - Click to kill</div>
          <img
            className="object-cover object-center max-h-[100%]"
            src={marcus}
          />
        </div>
      </div>
    </>
  );
}
