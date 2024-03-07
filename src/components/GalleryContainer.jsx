import "../index.css";
import ProjectBlock from "./ProjectBlock";
import { useEffect, useState } from "react";

export default function GalleryContainer({
  parentIsClicked,
  parentIsUnfaded,
  setParentIsUnfaded,
  hoverIsActive,
  setHoverIsActive,
}) {
  let position = ["up", "down"];
  return (
    <div className="flex flex-col gallery-container ">
      <div className="flex gallery-container">
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
