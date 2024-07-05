import { useContextProjectPage } from "../context/ContextProjectPage";
import { usePageNav } from "../hooks/usePageNavigation";
import { useState, useEffect } from "react";

import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
  const [clickedImage, setClickedImage] = useState(currentProject.images[0]);

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
            !isFadedProjectPage
              ? "gallery-title text-2xl m-1 ml-3 lg:size-[1.3vw] xl:whitespace-nowrap "
              : "gallery-title--faded--left text-2xl m-1 ml-3 lg:size-[1.3vw] xl:whitespace-nowrap"
          }  gallery-element text-left font-medium hover:scale-110 ease-in-out duration-1000 text-secondary`}
        >
          {currentProject.title}
        </div>
        <div className="flex xl:gap-5">
          <div
            className={`gallery-x ${
              !isFadedProjectPage ? "gallery-x" : "gallery-x--faded--left"
            } ${
              !isFadedProjectPage ? "hover-scale" : ""
            } gallery-element font-bold`}
            onClick={handleClickGoBack}
          >
            <FaChevronLeft className="size-[25px] mt-[7px] lg:mt-0 lg:size-[1.5vw] text-secondary" />
          </div>
          <div
            className={`gallery-x ${
              !isFadedProjectPage ? "gallery-x" : "gallery-x--faded--left"
            } ${
              !isFadedProjectPage ? "hover-scale" : ""
            } gallery-element font-bold`}
            onClick={handleClickX}
          >
            <IoClose className="size-[40px] lg:size-[2.5vw] lg:mt-[-0.5vw] text-secondary" />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col xl:flex-row xl:mt-6 xl:h-[78vh] gap-5 overflow-scroll no-scroll ${
          isFadedProjectPage ? "project-container--faded" : "project-container"
        }`}
      >
        <div className="flex flex-col gap-4 overflow-scroll no-scroll  w-full xl:w-[60%]">
          <div className="aspect-16-9 md:overflow-hidden min-w-full">
            <div className="rounded-lg m-[3%] xl:m-0 ">
              <img
                src={clickedImage.full}
                alt="Clicked Image"
                className="object-contain min-w-full h-full image-load-faded"
                onLoad={(e) => {
                  e.target.classList.add("image-load-complete");
                }}
              />
            </div>
          </div>
          <div className="flex justify-between bg-gray-white py-2">
            <div className="flex pr-2 w-[5%] items-center text-secondary">
              <RiArrowLeftWideFill className="xl:size-[3vw]" />
            </div>
            <div
              className="flex gap-5 no-scroll overflow-scroll"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              {currentProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumb}
                  className="aspect-square rounded-lg object-cover object-center h-[33vw] w-[33vw] md:h-[10vw] md:w-[10vw] image-load-faded"
                  alt={`Image ${index}`}
                  onLoad={(e) => {
                    e.target.classList.add("image-load-complete");
                  }}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <div className="flex pl-2 w-[5%] items-center text-secondary">
              <RiArrowRightWideFill className="size-[3vw]" />
            </div>
          </div>
        </div>
        <div className="px-[3%] xl:px-10 lg:text-[0.95vw] no-scroll rounded-lg  xl:w-[40%] overflow-y-auto text-secondary relative">
          {/* Render the inner HTML content */}
          <div dangerouslySetInnerHTML={{ __html: currentProject.body }}></div>
        </div>
      </div>
    </div>
  );
}
