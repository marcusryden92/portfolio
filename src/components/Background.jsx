import React from "react";
import InteractiveCircles from "./InteractiveCircles";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <InteractiveCircles />
    </div>
  );
};

export default Background;
