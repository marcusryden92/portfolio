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
      <div className="box h-full w-full md:my-5 md:mx-20 p-10 text-left">
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
          className={`flip-card h-full w-full md:h-[35vw] md:w-full]  ${
            isFadedAbout ? "about-container--faded" : "about-container"
          } ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front overflow-hidden flex">
              <div className="flex flex-col">
                <div className="flex p-10 flex-grow">
                  Hello! I'm Marcus. <br /> I've studied industrial design at
                  LTH, and more recently front-end development at Hyper Island.
                  In my spare time I try to exercise and read difficult books,
                  with some assistance from my pet leopard gecko Scheherazade.
                </div>
                <img
                  src={gecko}
                  className="h-1/2 w-1/2 object-contain p-5 items-end"
                />
              </div>
              <img
                className="md:h-[35vw] self-end"
                src={portrait}
                alt="Marcus"
              />
            </div>
            <div className="flip-card-back overflow-hidden">
              <div className="p-10">Back Content</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
