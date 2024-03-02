import "../index.css";
import { useState, useEffect } from "react";
import { customContext } from "../context/Context";

export default function ProjectBlock({}) {
  const { isClickedWebD } = customContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isClickedWebD);
    console.log(isClickedWebD);
  }, [isClickedWebD]);

  const classArray = [
    "project-block--faded--100",
    "project-block--faded--200",
    "project-block--faded--300",
  ];

  const currentClass = classArray[Math.floor(Math.random() * 2)];

  const colorArray = ["bg-rose-400", "bg-amber-400", "bg-slate-400"];

  const currentColor = colorArray[Math.floor(Math.random() * 3)];

  return (
    <div
      className={`${
        isVisible ? "project-block" : currentClass
      } ${currentColor} hover:scale-110 ease-in-out duration-1000`}
    ></div>
  );
}
