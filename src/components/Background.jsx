import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "../graphics/Experience";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas className="w-full h-full">
        <Experience />
      </Canvas>
    </div>
  );
};

export default Background;
