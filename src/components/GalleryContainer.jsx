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
      setIsFadedAbout,
      project
    );
  }

  let position = ["up", "down"];
  return (
    <div className="flex flex-col gallery-container ">
      <div className="flex gallery-container" onClick={clickProject}>
        {projectData.map((project, index) => (
          <ProjectBlock
            key={index}
            position={position[0]}
            parentIsClicked={parentIsClicked}
            parentIsUnfaded={parentIsUnfaded}
            setParentIsUnfaded={setParentIsUnfaded}
            hoverIsActive={hoverIsActive}
            setHoverIsActive={setHoverIsActive}
            onClick={() => {
              clickProject(project);
            }}
          />
        ))}
      </div>
      <div className="flex gallery-container">
        <ProjectBlock
          position={position[1]}
          parentIsClicked={parentIsClicked}
          parentIsUnfaded={parentIsUnfaded}
          setParentIsUnfaded={setParentIsUnfaded}
          hoverIsActive={hoverIsActive}
          setHoverIsActive={setHoverIsActive}
        />
        <ProjectBlock
          position={position[1]}
          parentIsClicked={parentIsClicked}
          parentIsUnfaded={parentIsUnfaded}
          setParentIsUnfaded={setParentIsUnfaded}
          hoverIsActive={hoverIsActive}
          setHoverIsActive={setHoverIsActive}
        />
        <ProjectBlock
          position={position[1]}
          parentIsClicked={parentIsClicked}
          parentIsUnfaded={parentIsUnfaded}
          setParentIsUnfaded={setParentIsUnfaded}
          hoverIsActive={hoverIsActive}
          setHoverIsActive={setHoverIsActive}
        />
      </div>
    </div>
  );
}
