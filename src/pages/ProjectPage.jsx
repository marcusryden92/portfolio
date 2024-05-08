import { useContextProjectPage } from "../context/ContextProjectPage";
import { usePageNav } from "../hooks/usePageNavigation";
import { useState, useEffect } from "react";

export default function ProjectPage() {
  const { isFadedProjectPage, setIsFadedProjectPage } = useContextProjectPage();

  const [active, setActive] = useState(false);

  const { resetClickedStates } = usePageNav();

  function handleClickX() {
    setIsFadedProjectPage(true);
    setTimeout(resetClickedStates, 1000);
  }

  useEffect(() => {
    if (!active) {
      setActive(true);
      setTimeout(() => {
        setIsFadedProjectPage(false);
      }, 50);
    }
  }, []);

  return (
    <>
      <div className="box my-5 mx-20 p-10 text-left">
        <div className="flex justify-between w-full">
          <div
            className={`${
              !isFadedProjectPage ? "gallery-title" : "gallery-title--faded"
            } gallery-element w-40 font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            Project
          </div>
          <div
            className={`gallery-x ${
              !isFadedProjectPage ? "gallery-x" : "gallery-x--faded"
            } ${
              !isFadedProjectPage ? "hover-scale" : ""
            } gallery-element w-10 font-bold `}
            onClick={handleClickX}
          >
            X
          </div>
        </div>

        <div
          className={`h-[500px] w-[700px]  ${
            isFadedProjectPage ? "about-container--faded" : "about-container"
          } `}
        >
          <div className="bg-gray-200 w-[100%] h-[100%]"></div>
        </div>
      </div>
    </>
  );
}
