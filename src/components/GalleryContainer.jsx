import "../index.css";
import ProjectBlock from "./ProjectBlock";
import { useEffect, useState } from "react";

export default function GalleryContainer() {
  let position = ["up", "down"];
  return (
    <div className="flex flex-col gallery-container ">
      <div className="flex gallery-container">
        <ProjectBlock position={position[0]} />
        <ProjectBlock position={position[0]} />
        <ProjectBlock position={position[0]} />
        <ProjectBlock position={position[0]} />
      </div>
      <div className="flex gallery-container">
        <ProjectBlock position={position[1]} />
        <ProjectBlock position={position[1]} />
        <ProjectBlock position={position[1]} />
        <ProjectBlock position={position[1]} />
      </div>
    </div>
  );
}
