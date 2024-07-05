import { useState, useEffect } from "react";

import Cover from "../components/Cover";
import Background from "../components/Background";

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
    <div className="flex md:flex-row overflow-hidden max-h-[100vh] max-w-[100vw] ">
      {" "}
      <div className="absolute z-10 bottom-0">
        <Cover />
      </div>
      <div className="flex overflow-scroll md:overflow-hidden flex-col md:flex-row main-container z-5">
        <Menu />
        {isClickedAbout ? <About /> : ""}
        {isClickedWebD ? <WebD /> : ""}
        {isClickedIndD ? <IndD /> : ""}
        {isClickedProjectPage ? <ProjectPage /> : ""}
      </div>
      <div className="z-0 absolute rounded-none bg-neutral-200">
        <div
          className={`${menuVisible ? " " : "opacity-10"} ${
            !isFadedAbout ||
            isUnfadedWebD ||
            isUnfadedIndD ||
            !isFadedProjectPage
              ? "opacity-70"
              : "opacity-100  "
          } transition-opacity bg-primary rounded-none`}
        >
          <div
            className={`${menuVisible ? " " : "opacity-10"} ${
              !isFadedAbout ||
              isUnfadedWebD ||
              isUnfadedIndD ||
              !isFadedProjectPage
                ? "opacity-10"
                : "opacity-25"
            } transition-opacity overflow-hidden max-w-[100vw]`}
          >
            <Background className="behind rounded-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
