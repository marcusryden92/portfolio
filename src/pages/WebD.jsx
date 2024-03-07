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
    setIsUnfadedWebD(true);
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
            } gallery-element w-32
        font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            Webdesign
          </div>
          <div
            className={`gallery-x ${
              isUnfadedWebD ? "gallery-x" : "gallery-x--faded"
            } ${hoverIsActiveWebD ? "hover-scale" : ""} 
           gallery-element w-10
            font-bold `}
            onClick={handleClickX}
          >
            X
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
