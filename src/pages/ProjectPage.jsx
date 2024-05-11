import { useContextProjectPage } from "../context/ContextProjectPage";
import { usePageNav } from "../hooks/usePageNavigation";
import { useState, useEffect } from "react";

export default function ProjectPage() {
  const { isFadedProjectPage, setIsFadedProjectPage, currentProject, goBack } =
    useContextProjectPage();

  const [active, setActive] = useState(false);
  const [clickedImage, setClickedImage] = useState(currentProject.images[1]); // Track clicked image

  const { resetClickedStates } = usePageNav();

  function handleClickX() {
    setIsFadedProjectPage(true);
    setTimeout(resetClickedStates, 1000);
  }

  function handleClickGoBack() {
    goBack();
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
      <div className="box md:my-10 md:mx-20 p-10 text-left w-full">
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
              } gallery-element font-bold `}
              onClick={handleClickGoBack}
            >
              &lt;
            </div>
            <div
              className={`gallery-x ${
                !isFadedProjectPage ? "gallery-x" : "gallery-x--faded"
              } ${
                !isFadedProjectPage ? "hover-scale" : ""
              } gallery-element font-bold `}
              onClick={handleClickX}
            >
              X
            </div>
          </div>
        </div>

        <div
          className={`flex mt-6 flex-col md:flex-row gap-5 overflow-scroll no-scroll   ${
            isFadedProjectPage ? "about-container--faded" : "about-container"
          } `}
        >
          <div className="flex flex-col gap-5 overflow-scroll no-scroll w-[100%] md:w-[60%]">
            {/* Render clicked image in large format */}
            <div className="aspect-16-9 overflow-hidden">
              <img
                src={clickedImage.full}
                alt="Clicked Image"
                className="object-contain w-full h-full"
              />
            </div>

            <div className="flex gap-5 no-scroll" style={{ flexShrink: 0 }}>
              {currentProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumb}
                  className=" aspect-square object-cover object-center h-[33vw] w-[33vw] md:h-[10vw] md:w-[10vw]"
                  alt={`Image ${index}`}
                  onClick={() => handleImageClick(image)} // Handle image click
                />
              ))}{" "}
            </div>
          </div>
          <div className="p-10 bg-neutral-900 w-[40%] text-white">
            {currentProject.body}
          </div>
        </div>
      </div>
    </>
  );
}
