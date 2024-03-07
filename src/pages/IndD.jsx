import GalleryContainer from "../components/GalleryContainer";
import { useState, useEffect } from "react";
import { useContextIndD } from "../context/ContextIndD";
import { usePageNav } from "../hooks/usePageNavigation";

export default function IndD({}) {
  const {
    isUnfadedIndD,
    setIsUnfadedIndD,
    hoverIsActiveIndD,
    setHoverIsActiveIndD,
  } = useContextIndD();

  const { handleExitPage, isClickedIndD } = usePageNav();

  useEffect(() => {
    setTimeout(() => {
      setIsUnfadedIndD(true);
    }, 50);
  }, []);

  function handleClickX() {
    handleExitPage(setHoverIsActiveIndD, setIsUnfadedIndD);
  }

  return (
    <>
      <div className="box my-5 mx-20 p-10 text-left">
        <div className="flex justify-between w-full">
          <div
            className={`${
              isUnfadedIndD ? "gallery-title" : "gallery-title--faded"
            } gallery-element w-40
        font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            Industrial Design
          </div>
          <div
            className={`gallery-x ${
              isUnfadedIndD ? "gallery-x" : "gallery-x--faded"
            } ${hoverIsActiveIndD ? "hover-scale" : ""} 
           gallery-element w-10
            font-bold `}
            onClick={handleClickX}
          >
            X
          </div>
        </div>
        <GalleryContainer
          parentIsClicked={isClickedIndD}
          parentIsUnfaded={isUnfadedIndD}
          setParentIsUnfaded={setIsUnfadedIndD}
          hoverIsActive={hoverIsActiveIndD}
          setHoverIsActive={setHoverIsActiveIndD}
        />
      </div>
    </>
  );
}
