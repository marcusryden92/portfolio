import { useContextProjectPage } from "../context/ContextProjectPage";
import { usePageNav } from "../hooks/usePageNavigation";
import { useState, useEffect } from "react";

import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

export default function ProjectPage() {
  const {
    isFadedProjectPage,
    setIsFadedProjectPage,
    currentProject,
    goBack,
    setMenuVisible,
    currentProjectKind,
    exitWebD,
    exitIndD,
  } = useContextProjectPage();

  const [active, setActive] = useState(false);
  const [clickedImage, setClickedImage] = useState(currentProject.images[1]);

  const { resetClickedStates } = usePageNav();

  function handleClickX() {
    setIsFadedProjectPage(true);
    setTimeout(resetClickedStates, 1000);
  }

  function handleClickGoBack() {
    setMenuVisible(false);
    setTimeout(() => {
      setMenuVisible(true);
    }, 2000);
    if (currentProjectKind === "webD") {
      if (exitWebD) exitWebD();
    } else {
      if (exitIndD) exitIndD();
    }
  }

  function handleImageClick(image) {
    setClickedImage(image);
  }

  useEffect(() => {
    if (!active) {
      setActive(true);
      setTimeout(() => {
        setIsFadedProjectPage(false);
      }, 50);
    }

    setTimeout(() => {
      setMenuVisible(true);
    }, 1000);
  }, [active, setIsFadedProjectPage, setMenuVisible]);

  return (
    <div className="box center-viewport md:my-10 md:max-w-[80%] text-left w-full">
      <div className="flex justify-between w-full">
        <div
          className={`${
            !isFadedProjectPage ? "gallery-title" : "gallery-title--faded"
          } gallery-element font-medium hover:scale-110 ease-in-out duration-1000`}
        >
          {currentProject.title}
        </div>
        <div className="flex gap-5">
          <div
            className={`gallery-x ${
              !isFadedProjectPage ? "gallery-x" : "gallery-x--faded"
            } ${
              !isFadedProjectPage ? "hover-scale" : ""
            } gallery-element font-bold`}
            onClick={handleClickGoBack}
          >
            &lt;
          </div>
          <div
            className={`gallery-x ${
              !isFadedProjectPage ? "gallery-x" : "gallery-x--faded"
            } ${
              !isFadedProjectPage ? "hover-scale" : ""
            } gallery-element font-bold`}
            onClick={handleClickX}
          >
            X
          </div>
        </div>
      </div>
      <div
        className={`flex mt-6 md:h-[78vh] flex-col md:flex-row gap-5 overflow-scroll no-scroll ${
          isFadedProjectPage ? "about-container--faded" : "about-container"
        }`}
      >
        <div className="flex flex-col gap-4 overflow-scroll no-scroll justify-between w-full md:w-[60%]">
          <div className="aspect-16-9 md:overflow-hidden min-w-full">
            <img
              src={clickedImage.full}
              alt="Clicked Image"
              className="object-contain min-w-full h-full rounded-lg"
            />
          </div>
          <div className="flex justify-between bg-gray-white py-2">
            <div className="flex pr-2 w-[5%] items-center">
              <RiArrowLeftWideFill className="size-[3vw]" />
            </div>
            <div
              className="flex gap-5 no-scroll overflow-scroll"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              {currentProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumb}
                  className="aspect-square rounded-lg object-cover object-center h-[33vw] w-[33vw] md:h-[10vw] md:w-[10vw]"
                  alt={`Image ${index}`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <div className="flex pl-2 w-[5%] items-center">
              <RiArrowRightWideFill className="size-[3vw]" />
            </div>
          </div>
        </div>
        <div className="p-10 text-[0.95vw] no-scroll rounded-lg  w-[40%] overflow-y-auto text-neutral-950 relative">
          {/* Render the inner HTML content */}
          <div dangerouslySetInnerHTML={{ __html: currentProject.body }}></div>
        </div>
      </div>
    </div>
  );
}
