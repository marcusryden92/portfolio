import GalleryContainer from "../components/GalleryContainer";
import { useState, useEffect } from "react";
import { customContext } from "../context/Context";
import { CustomContextWebD } from "../context/ContextWebD";

export default function WebD({ handleClickClear }) {
  const { isClickedWebD, setIsClickedWebD } = customContext();

  const { isUnfadedWebD, setIsUnfadedWebD, hoverIsActive, setHoverIsActive } =
    CustomContextWebD();

  useEffect(() => {
    setIsUnfadedWebD(isClickedWebD);
  }, [isClickedWebD]);

  function handleClickExit(e) {
    setHoverIsActive(false);
    setIsUnfadedWebD(false);
    setTimeout(() => handleClickClear(), 1500);
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
            } ${hoverIsActive ? "hover-scale" : ""} 
           gallery-element w-10
            font-bold `}
            onClick={handleClickExit}
          >
            X
          </div>
        </div>
        <GalleryContainer />
      </div>
    </>
  );
}
