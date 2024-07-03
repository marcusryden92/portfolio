import React from "react";
import InteractiveCircles from "./InteractiveCircles";
import GrainOverlay from "./GrainOverlay";

const Background = () => {
  return (
    <div>
      {" "}
      <InteractiveCircles className=" rounded-none" />
      {/* <GrainOverlay className="rounded-none" /> */}
    </div>
  );
};

export default Background;
