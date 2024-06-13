import { useState, useEffect } from "react";

import Cover from "../components/Cover";
import InteractiveCircles from "../components/InteractiveCircles";

import Menu from "../components/Menu";
import About from "./About";
import WebD from "./WebD";
import IndD from "./IndD";
import ProjectPage from "./ProjectPage";

import { ContextWebD } from "../context/ContextWebD";
import { ContextIndD } from "../context/ContextIndD";
import { ContextAbout } from "../context/ContextAbout";
import { ContextProjectPage } from "../context/ContextProjectPage";

import { usePageNav } from "../hooks/usePageNavigation";

import projectDataInd from "../projectdata/projectDataInd";

export default function MainPage() {
  const { isClickedAbout, isClickedIndD, isClickedWebD, isClickedProjectPage } =
    usePageNav();

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
      <ContextIndD>
        <ContextWebD>
          <ContextAbout>
            <ContextProjectPage>
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
                <div className="z-0 absolute bg-slate-500 h-full w-full">
                  <InteractiveCircles className="behind" />
                </div>
              }
            </ContextProjectPage>
          </ContextAbout>
        </ContextWebD>
      </ContextIndD>
    </div>
  );
}
