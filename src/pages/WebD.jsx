import GalleryContainer from "../components/GalleryContainer";
import { useState, useEffect } from "react";
import { useContextWebD } from "../context/ContextWebD";
import { usePageNav } from "../hooks/usePageNavigation";
import projectDataWeb from "../projectdata/projectDataWeb";

export default function WebD({}) {
  const {
    isUnfadedWebD,
    setIsUnfadedWebD,
    hoverIsActiveWebD,
    setHoverIsActiveWebD,
  } = useContextWebD();

  const { handleExitPage, isClickedWebD } = usePageNav();

  useEffect(() => {
    setTimeout(() => {
      setIsUnfadedWebD(true);
    }, 50);
  }, []);

  function handleClickX() {
    handleExitPage(setHoverIsActiveWebD, setIsUnfadedWebD);
  }

  return (
    <>
      <div className="box center-viewport my-10 w-full md:max-w-[57%] text-left">
        <div className="flex justify-between w-full">
          <div
            className={`${
              isUnfadedWebD ? "gallery-title" : "gallery-title--faded"
            } 
        font-medium `}
          >
            <div
              className={`text-xl md:text-custom gallery-element ${
                hoverIsActiveWebD
                  ? "hover:scale-110 ease-in-out duration-200"
                  : ""
              }`}
            >
              Webdesign
            </div>
          </div>
          <div
            className={`gallery-x ${
              isUnfadedWebD ? "gallery-x" : "gallery-x--faded"
            } `}
            onClick={handleClickX}
          >
            <div
              className={`${
                hoverIsActiveWebD
                  ? "hover:scale-110 ease-in-out duration-200"
                  : ""
              } 
           gallery-element
            font-bold text-xl md:text-custom`}
            >
              X
            </div>
          </div>
        </div>
        <GalleryContainer
          projectData={projectDataWeb}
          parentIsClicked={isClickedWebD}
          parentIsUnfaded={isUnfadedWebD}
          setParentIsUnfaded={setIsUnfadedWebD}
          hoverIsActive={hoverIsActiveWebD}
          setHoverIsActive={setHoverIsActiveWebD}
        />
      </div>
    </>
  );
}
