import GalleryContainer from "../components/GalleryContainer";
import { useState, useEffect } from "react";
import { useContextIndD } from "../context/ContextIndD";
import { usePageNav } from "../hooks/usePageNavigation";
import projectDataInd from "../projectdata/projectDataInd";

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
      <div className="box  md:my-10 md:mx-20 p-10 text-left">
        <div className="flex justify-between w-full">
          <div
            className={`${
              isUnfadedIndD ? "gallery-title" : "gallery-title--faded"
            }  
        font-medium `}
          >
            <div
              className={`gallery-element ${
                hoverIsActiveIndD
                  ? "hover:scale-110 ease-in-out duration-500 "
                  : ""
              }`}
            >
              Industrial Design
            </div>
          </div>
          <div
            className={`gallery-x ${
              isUnfadedIndD ? "gallery-x" : "gallery-x--faded"
            } `}
            onClick={handleClickX}
          >
            <div
              className={`${
                hoverIsActiveIndD
                  ? "hover:scale-110 ease-in-out duration-500"
                  : ""
              } 
           gallery-element
            font-bold  `}
            >
              X
            </div>
          </div>
        </div>
        <GalleryContainer
          projectData={projectDataInd}
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
