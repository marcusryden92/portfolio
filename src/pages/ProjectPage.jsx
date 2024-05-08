import { useContextProjectPage } from "../context/ContextProjectPage";
import { usePageNav } from "../hooks/usePageNavigation";
import { useState, useEffect } from "react";

export default function ProjectPage() {
  const { isFadedProjectPage, setIsFadedProjectPage, currentProject } =
    useContextProjectPage();

  const [active, setActive] = useState(false);
  const [clickedImage, setClickedImage] = useState(currentProject.images[1]); // Track clicked image

  const { resetClickedStates } = usePageNav();

  function handleClickX() {
    setIsFadedProjectPage(true);
    setTimeout(resetClickedStates, 1000);
  }

  // Function to handle image click
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
  }, []);

  return (
    <>
      <div className="box my-5 mx-20 p-10 text-left w-1/2">
        <div className="flex justify-between w-full">
          <div
            className={`${
              !isFadedProjectPage ? "gallery-title" : "gallery-title--faded"
            } gallery-element font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            {currentProject.title}
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
          className={`flex flex-col gap-5 overflow-scroll no-scroll   ${
            isFadedProjectPage ? "about-container--faded" : "about-container"
          } `}
        >
          {/* Render clicked image in large format */}
          <img
            className={"h-[70%] object-cover object-center"}
            src={clickedImage}
            alt="Clicked Image"
          />

          <div className="flex gap-5 no-scroll" style={{ flexShrink: 0 }}>
            {currentProject.images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="object-cover object-center h-[10vw] w-[10vw]"
                alt={`Image ${index}`}
                onClick={() => handleImageClick(image)} // Handle image click
              />
            ))}{" "}
          </div>
          <div>{currentProject.body}</div>
        </div>
      </div>
    </>
  );
}
