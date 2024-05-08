import GalleryContainer from "../components/GalleryContainer";
import { useState, useEffect } from "react";
import { useContextWebD } from "../context/ContextWebD";
import { usePageNav } from "../hooks/usePageNavigation";

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
      <div className="box my-5 mx-20 p-10 text-left">
        <div className="flex justify-between w-full">
          <div
            className={`${
              isUnfadedWebD ? "gallery-title" : "gallery-title--faded"
            }  w-40
        font-medium `}
          >
            <div
              className={`gallery-element ${
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
           gallery-element w-10
            font-bold `}
            >
              X
            </div>
          </div>
        </div>
        <GalleryContainer
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
