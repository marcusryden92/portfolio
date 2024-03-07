import { useState } from "react";

import Cover from "../components/Cover";
import InteractiveCircles from "../components/InteractiveCircles";

import Menu from "../components/Menu";
import About from "./About";
import WebD from "./WebD";
import IndD from "./IndD";

import { useNavContext } from "../context/NavigationContextProvider";
import { ContextWebD } from "../context/ContextWebD";
import { PageNavigationProvider } from "../hooks/usePageNavigation";

export default function MainPage() {
  return (
    <div className="flex flex-col sm:flex-row">
      {" "}
      <PageNavigationProvider>
        <div className="absolute z-10">
          <Cover />
        </div>

        <div className="flex main-container z-5">
          <Menu
            handleClickAbout={handleClickAbout}
            handleClickWebD={handleClickWebD}
            handleClickIndD={handleClickIndD}
          />
          {isClickedAbout ? <About handleClickClear={handleClickClear} /> : ""}
          {isClickedWebD ? (
            <ContextWebD>
              <WebD handleClickClear={handleClickClear} />
            </ContextWebD>
          ) : (
            ""
          )}
          {isClickedIndD ? <IndD handleClickClear={handleClickClear} /> : ""}
        </div>

        <div className="z-0 absolute">
          <InteractiveCircles className="behind" />
        </div>
      </PageNavigationProvider>
    </div>
  );
}
