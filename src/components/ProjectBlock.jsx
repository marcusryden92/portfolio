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

  return (
    <div
      className={`${
        isVisible ? "project-block" : "project-block--faded"
      } bg-slate-400`}
    ></div>
  );
}
