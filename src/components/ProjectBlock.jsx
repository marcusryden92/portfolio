import "../index.css";
import { useState, useEffect } from "react";

export default function ProjectBlock({
  parentIsClicked,
  parentIsUnfaded,
  setParentIsUnfaded,
  hoverIsActive,
  setHoverIsActive,
  position,
  thumbnail,
  clickProject,
  project,
}) {
  useEffect(() => {
    setTimeout(() => setHoverIsActive(true), 1500);
  }, []);

  //let classArray = [];

  let classArrayFaded = [];

  if (position === "down") {
    //classArray = ["project-block--1", "project-block--2", "project-block--3"];

    classArrayFaded = [
      "project-block--faded--1",
      "project-block--faded--2",
      "project-block--faded--3",
    ];
  } else {
    //classArray = ["project-block--4", "project-block--5", "project-block--6"];

    classArrayFaded = [
      "project-block--faded--4",
      "project-block--faded--5",
      "project-block--faded--6",
    ];
  }

  const currentClass = Math.floor(Math.random() * 3);

  const colorArray = ["bg-rose-400", "bg-amber-400", "bg-slate-400"];

  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    setCurrentColor(colorArray[Math.floor(Math.random() * 3)]);
  }, []); // Run once when component mounts to set initial color

  //${classArray[currentClass]}

  return (
    <div
      className={`project-block ${
        parentIsUnfaded ? "" : classArrayFaded[currentClass]
      }`}
    >
      <img
        src={thumbnail}
        onClick={() => {
          clickProject(project);
        }}
        className={`h-full w-full object-cover object-center ${
          hoverIsActive ? "hover-scale" : ""
        } transition-transform duration-500 ease-in-out`}
        onLoad={(e) => {
          e.target.classList.add("image-load-complete");
        }}
      />
    </div>
  );
}
