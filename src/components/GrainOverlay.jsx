import React, { useEffect, useRef } from "react";

const GrainOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const noiseIntensity = 0.5; // Adjust the intensity of the noise
    const imageData = context.createImageData(canvas.width, canvas.height);

    const drawNoise = () => {
      for (let i = 0; i < imageData.data.length; i += 4) {
        const randomValue = Math.random() * 255 * noiseIntensity;
        // Assign random grayscale value to each pixel
        imageData.data[i] =
          imageData.data[i + 1] =
          imageData.data[i + 2] =
            randomValue;
        // Fully opaque alpha channel
        imageData.data[i + 3] = 255;
      }
      context.putImageData(imageData, 0, 0);
    };

    const animateNoise = () => {
      drawNoise();
      requestAnimationFrame(animateNoise);
    };

    animateNoise();

    return () => cancelAnimationFrame(animateNoise);
  }, []);

  return (
    <canvas
      className=" opacity-20"
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default GrainOverlay;
