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

  const [shouldSlideRight, setShouldSlideRight] = useState(false);

  const [clickedImage, setClickedImage] = useState(currentProject.images[0]);

  const { resetClickedStates } = usePageNav();

  function handleClickX() {
    setShouldSlideRight(true);
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
    <div className="box center-viewport py-10 px-[5%] md:max-w-[80%] text-left w-full overflow-scroll xl:overflow-visible max-h-screen">
      {/*Top bar*/}

      <div className="flex mb-5 xl:mb-0 xl:gap-5 justify-between w-[100%]">
        {/* Back button */}

        <div
          className={`gallery-x ${
            !isFadedProjectPage
              ? "gallery-x"
              : `${
                  !shouldSlideRight
                    ? "gallery-x--faded--left"
                    : "gallery-x--faded"
                }`
          } ${
            !isFadedProjectPage
              ? "hover:scale-110 ease-in-out duration-500"
              : ""
          } gallery-element font-bold`}
          onClick={handleClickGoBack}
        >
          <FaChevronLeft className="size-[25px] mt-[7px] lg:mt-0 lg:size-[1.5vw] text-secondary" />
        </div>

        {/* Close button */}

        <div
          className={`gallery-x ${
            !isFadedProjectPage
              ? "gallery-x"
              : `${
                  !shouldSlideRight
                    ? "gallery-x--faded--left"
                    : "gallery-x--faded"
                }`
          }${
            !isFadedProjectPage
              ? "hover:scale-110 ease-in-out duration-500"
              : ""
          } gallery-element font-bold`}
          onClick={handleClickX}
        >
          <IoClose className="size-[40px] lg:size-[2.5vw] lg:mt-[-0.5vw] text-secondary" />
        </div>
      </div>
      <div
        className={`flex flex-col xl:flex-row xl:mt-6 xl:max-h-[100%] gap-5 no-scroll ${
          !isFadedProjectPage
            ? "project-container"
            : `${
                !shouldSlideRight
                  ? "project-container--faded--left"
                  : "project-container--faded"
              }`
        }`}
      >
        {/* Left Column */}

        <div
          className="flex flex-col overflow-x-visible max-h-[90%] xl:mr-5 rounded-none 
        xl:border-r-2 border-secondary border-opacity-30 text-justify lg:text-[0.95vw] no-scroll xl:w-[55%]  text-secondary relative"
        >
          <div className="flex flex-col gap-8">
            {/* Title */}

            <div
              className={` ${
                !isFadedProjectPage
                  ? "gallery-title"
                  : `${
                      !shouldSlideRight
                        ? "gallery-title--faded--left"
                        : "gallery-title--faded"
                    }`
              } text-2xl lg:size-[1.3vw] xl:whitespace-nowrap gallery-element text-left font-medium hover:scale-110 ease-in-out duration-1000 text-secondary`}
            >
              {currentProject.title}
            </div>

            {/* Render the inner HTML content */}
            <div
              className="scrollable-content  overflow-y-scroll no-scroll rounded-none xl:pr-8"
              dangerouslySetInnerHTML={{ __html: currentProject.body }}
            ></div>
          </div>

          <div className="flex flex-col gap-5 border-t-2 border-opacity-30 border-secondary rounded-none mr-8 mt-5 pt-5">
            <div
              className="scrollable-content  overflow-y-scroll no-scroll rounded-none pr-8"
              dangerouslySetInnerHTML={{ __html: currentProject.links }}
            ></div>

            <div
              className="scrollable-content  overflow-y-scroll no-scroll rounded-none pr-8"
              dangerouslySetInnerHTML={{ __html: currentProject.collaborators }}
            ></div>
          </div>
        </div>

        {/* Right Column */}

        <div className="flex flex-col  no-scroll  w-full xl:w-[60%]">
          <div className="aspect-16-9 md:overflow-hidden min-w-full">
            <div className="rounded-[1vw] my-[3%] xl:m-0 ">
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
          <div className="flex xl:mx-[-5%] justify-between bg-gray-white py-5 ">
            <div className="flex pr-2 w-[15%] xl:w-[5%] items-center text-secondary">
              <RiArrowLeftWideFill className="xl:size-[3vw]" />
            </div>
            <div
              className="flex gap-5 no-scroll overflow-scroll rounded-[1vw]"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              {currentProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumb}
                  className="aspect-square rounded-[1vw] object-cover object-center h-[33vw] w-[33vw] md:h-[10vw] md:w-[10vw] image-load-faded"
                  alt={`Image ${index}`}
                  onLoad={(e) => {
                    e.target.classList.add("image-load-complete");
                  }}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <div className="flex pl-2 w-[15%] xl:w-[5%] items-center text-secondary">
              <RiArrowRightWideFill className="xl:size-[3vw]" />
            </div>
          </div>
          <div
            className="flex scrollable-content opacity-90 no-scroll flex-wrap gap-[0.5rem]
            rounded-none border-t-2 border-opacity-30 border-secondary pt-5 mt-3 xl:pr-8 xl:max-h-[10%]"
            dangerouslySetInnerHTML={{ __html: currentProject.frameworks }}
          ></div>
        </div>
      </div>
    </div>
  );
}
