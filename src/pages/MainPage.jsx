import { useState } from "react";

import Cover from "../components/Cover";
import InteractiveCircles from "../components/InteractiveCircles";

import Menu from "../components/Menu";
import About from "./About";
import WebD from "./WebD";
import IndD from "./IndD";

import { ContextWebD } from "../context/ContextWebD";
import { ContextIndD } from "../context/ContextIndD";
import { usePageNav } from "../hooks/usePageNavigation";

export default function MainPage() {
  const { isClickedAbout, isClickedIndD, isClickedWebD } = usePageNav();

  return (
    <div className="flex flex-col sm:flex-row">
      {" "}
      <div className="absolute z-10">
        <Cover />
      </div>
      <div className="flex main-container z-5">
        <Menu />
        {isClickedAbout ? <About /> : ""}
        {isClickedWebD ? (
          <ContextWebD>
            <WebD />
          </ContextWebD>
        ) : (
          ""
        )}
        {isClickedIndD ? (
          <ContextIndD>
            <IndD />
          </ContextIndD>
        ) : (
          ""
        )}
      </div>
      <div className="z-0 absolute">
        <InteractiveCircles className="behind" />
      </div>
    </div>
  );
}
