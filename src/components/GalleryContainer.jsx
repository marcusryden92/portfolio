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
  const { setCurrentProject, setMenuVisible } = useContextProjectPage();

  const { handleClickProjectPage } = usePageNav();

  function clickProject(project) {
    setCurrentProject(project);
    setMenuVisible(false);
    handleClickProjectPage(
      setHoverIsActiveWebD,
      setIsUnfadedWebD,
      setHoverIsActiveIndD,
      setIsUnfadedIndD,
      setIsFadedAbout
    );
  }

  return (
    <div className="grid my-6 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {projectData
        ? projectData.map((project, index) => (
            <ProjectBlock
              key={index}
              parentIsClicked={parentIsClicked}
              parentIsUnfaded={parentIsUnfaded}
              setParentIsUnfaded={setParentIsUnfaded}
              hoverIsActive={hoverIsActive}
              setHoverIsActive={setHoverIsActive}
              thumbnail={project.thumbnail}
              clickProject={clickProject}
              project={project}
            />
          ))
        : ""}
    </div>
  );
}
