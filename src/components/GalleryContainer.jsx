import "../index.css";
import ProjectBlock from "./ProjectBlock";
import { useEffect, useState } from "react";

export default function GalleryContainer() {
  return (
    <div className="gallery-container">
      <ProjectBlock />
      <ProjectBlock />
      <ProjectBlock />
      <ProjectBlock />
    </div>
  );
}
