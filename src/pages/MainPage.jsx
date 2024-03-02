import { useState } from "react";

import Cover from "../components/Cover";
import InteractiveCircles from "../components/InteractiveCircles";

import Menu from "../components/Menu";
import About from "./About";
import WebD from "./WebD";
import IndD from "./IndD";

export default function MainPage() {
  const [isClickedAbout, setIsClickedAbout] = useState(false);
  const [isClickedWebD, setIsClickedWebD] = useState(false);
  const [isClickedIndD, setIsClickedIndD] = useState(false);

  function handleClickAbout() {
    setIsClickedAbout(true);
    setIsClickedWebD(false);
    setIsClickedIndD(false);
  }

  function handleClickWebD() {
    setIsClickedAbout(false);
    setIsClickedWebD(true);
    setIsClickedIndD(false);
  }

  function handleClickIndD() {
    setIsClickedAbout(false);
    setIsClickedWebD(false);
    setIsClickedIndD(true);
  }

  const value = {
    isClickedAbout,
    setIsClickedAbout,
    isClickedWebD,
    setIsClickedWebD,
    isClickedIndD,
    setIsClickedIndD,
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="absolute z-10">
        <Cover />
      </div>

      <div className="z-5">
        <Menu
          handleClickAbout={handleClickAbout}
          handleClickWebD={handleClickWebD}
          handleClickIndD={handleClickIndD}
        />
        {isClickedAbout ? <About /> : ""}
        {isClickedWebD ? <WebD /> : ""}
        {isClickedIndD ? <IndD /> : ""}
      </div>

      <div className="z-0 absolute">
        <InteractiveCircles className="behind" />
      </div>
    </div>
  );
}
