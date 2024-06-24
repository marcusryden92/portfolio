import { useState, useEffect } from "react";

import Cover from "../components/Cover";
import InteractiveCircles from "../components/InteractiveCircles";

import Menu from "../components/Menu";
import About from "./About";
import WebD from "./WebD";
import IndD from "./IndD";
import ProjectPage from "./ProjectPage";

import { usePageNav } from "../hooks/usePageNavigation";
import { useContextAbout } from "../context/ContextAbout";
import { useContextWebD } from "../context/ContextWebD";
import { useContextIndD } from "../context/ContextIndD";
import { useContextProjectPage } from "../context/ContextProjectPage";

import projectDataInd from "../projectdata/projectDataInd";

export default function MainPage() {
  const { isClickedAbout, isClickedIndD, isClickedWebD, isClickedProjectPage } =
    usePageNav();

  const { isFadedAbout } = useContextAbout();
  const { isUnfadedWebD } = useContextWebD();
  const { isUnfadedIndD } = useContextIndD();
  const { isFadedProjectPage, menuVisible } = useContextProjectPage();

  useEffect(() => {
    // Preload all images
    projectDataInd.forEach((project) => {
      const allImages = [
        ...project.images.map((image) => image.full),
        project.thumbnail,
      ];
      allImages.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    });
  }, []);

  return (
    <div className="flex md:flex-row">
      {" "}
      <div className="absolute z-10">
        <Cover />
      </div>
      <div className="flex overflow-scroll md:overflow-hidden flex-col md:flex-row main-container z-5">
        <Menu />
        {isClickedAbout ? <About /> : ""}
        {isClickedWebD ? <WebD /> : ""}
        {isClickedIndD ? <IndD /> : ""}
        {isClickedProjectPage ? <ProjectPage /> : ""}
      </div>
      {
        <div className="z-0 absolute  h-full w-full rounded-none bg-neutral-100">
          <div
            className={`${menuVisible ? " " : "hidden"} ${
              !isFadedAbout ||
              isUnfadedWebD ||
              isUnfadedIndD ||
              !isFadedProjectPage
                ? "opacity-0"
                : "opacity-100  "
            } transition-opacity bg-neutral-400 rounded-none`}
          >
            <div
              className={`${menuVisible ? " " : "hidden"} ${
                !isFadedAbout ||
                isUnfadedWebD ||
                isUnfadedIndD ||
                !isFadedProjectPage
                  ? "opacity-0"
                  : "opacity-25"
              } transition-opacity`}
            >
              <InteractiveCircles className="behind rounded-none" />
            </div>
          </div>
        </div>
      }
    </div>
  );
}
