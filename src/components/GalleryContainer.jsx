import "../index.css";
import ProjectBlock from "./ProjectBlock";
import { useEffect, useState } from "react";
import { usePageNav } from "../hooks/usePageNavigation";

import { useContextWebD } from "../context/ContextWebD";
import { useContextIndD } from "../context/ContextIndD";
import { useContextAbout } from "../context/ContextAbout";
import { useContextProjectPage } from "../context/ContextProjectPage";

export default function GalleryContainer({
  projectData,
  parentIsClicked,
  parentIsUnfaded,
  setParentIsUnfaded,
  hoverIsActive,
  setHoverIsActive,
}) {
  const { setHoverIsActiveWebD, setIsUnfadedWebD } = useContextWebD();
  const { setHoverIsActiveIndD, setIsUnfadedIndD } = useContextIndD();
  const { setIsFadedAbout } = useContextAbout();
  const { setCurrentProject } = useContextProjectPage();

  const { handleClickProjectPage } = usePageNav();

  function clickProject(project) {
    setCurrentProject(project);
    handleClickProjectPage(
      setHoverIsActiveWebD,
      setIsUnfadedWebD,
      setHoverIsActiveIndD,
      setIsUnfadedIndD,
      setIsFadedAbout
    );
  }

  let position = ["up", "down"];
  return (
    <div className="flex flex-wrap gallery-container">
      {projectData
        ? projectData.map((project, index) => (
            <div
              onClick={() => {
                clickProject(project);
              }}
            >
              <ProjectBlock
                key={index}
                position={position[0]}
                parentIsClicked={parentIsClicked}
                parentIsUnfaded={parentIsUnfaded}
                setParentIsUnfaded={setParentIsUnfaded}
                hoverIsActive={hoverIsActive}
                setHoverIsActive={setHoverIsActive}
                thumbnail={project.thumbnail}
              />
            </div>
          ))
        : ""}
    </div>
  );
}
