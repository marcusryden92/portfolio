import "../index.css";
import ProjectBlock from "./ProjectBlock";
import { useEffect, useState } from "react";
import { usePageNav } from "../hooks/usePageNavigation";

import { useContextWebD } from "../context/ContextWebD";
import { useContextIndD } from "../context/ContextIndD";
import { useContextAbout } from "../context/ContextAbout";

export default function GalleryContainer({
  parentIsClicked,
  parentIsUnfaded,
  setParentIsUnfaded,
  hoverIsActive,
  setHoverIsActive,
}) {
  const { setHoverIsActiveWebD, setIsUnfadedWebD } = useContextWebD();
  const { setHoverIsActiveIndD, setIsUnfadedIndD } = useContextIndD();
  const { setIsFadedAbout } = useContextAbout();

  const { handleClickProjectPage } = usePageNav();

  function clickProject() {
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
    <div className="flex flex-col gallery-container ">
      <div className="flex gallery-container" onClick={clickProject}>
        <ProjectBlock
          position={position[0]}
          parentIsClicked={parentIsClicked}
          parentIsUnfaded={parentIsUnfaded}
          setParentIsUnfaded={setParentIsUnfaded}
          hoverIsActive={hoverIsActive}
          setHoverIsActive={setHoverIsActive}
        />
        <ProjectBlock
          position={position[0]}
          parentIsClicked={parentIsClicked}
          parentIsUnfaded={parentIsUnfaded}
          setParentIsUnfaded={setParentIsUnfaded}
          hoverIsActive={hoverIsActive}
          setHoverIsActive={setHoverIsActive}
        />
        <ProjectBlock
          position={position[0]}
          parentIsClicked={parentIsClicked}
          parentIsUnfaded={parentIsUnfaded}
          setParentIsUnfaded={setParentIsUnfaded}
          hoverIsActive={hoverIsActive}
          setHoverIsActive={setHoverIsActive}
        />
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
