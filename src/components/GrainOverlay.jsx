import { useRef, useEffect } from "react";

const GrainOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      grained({
        element: canvasRef.current,
        size: 1, // Grain size
        opacity: 0.02, // Grain opacity
        intensity: 1, // Grain intensity (higher values mean more grains)
        animate: true, // Whether to animate grains
      });
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
    />
  );
};

export default GrainOverlay;
