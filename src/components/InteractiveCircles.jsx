import React, { useEffect, useRef } from "react";

const InteractiveCircles = () => {
  const circleCanvasRef = useRef(null);
  const gradientCanvasRef = useRef(null);
  const backgroundCanvasRef = useRef(null);
  const blurCanvasRef = useRef(null);

  useEffect(() => {
    const circleCanvas = circleCanvasRef.current;
    const gradientCanvas = gradientCanvasRef.current;
    const backgroundCanvas = backgroundCanvasRef.current;
    const blurCanvas = blurCanvasRef.current;
    const circleCtx = circleCanvas.getContext("2d", { alpha: true });
    const gradientCtx = gradientCanvas.getContext("2d");
    const backgroundCtx = backgroundCanvas.getContext("2d");
    const blurCtx = blurCanvas.getContext("2d");

    let mouse = {
      x: undefined,
      y: undefined,
    };

    const VELOCITY = 2;
    const MAXRADIUS = 70;
    const MINRADIUS = 7;
    const SIZEVARIATION = 3;

    const DETECTIONDISTANCE = 120;

    const CIRCLECOUNT =
      window.innerWidth < 768
        ? Math.floor((window.innerWidth * window.innerHeight) / 10000)
        : 100;

    const BACKGROUNDCOLOR = "#FFFFFF";
    const CIRCLE_FILL = "#000000";
    const CIRCLE_GRADIENT_CENTER = "rgba(255, 255, 255,0)";
    const CIRCLE_GRADIENT_EDGE = "rgba(255, 255, 255,0)";

    const CIRCLE_BACKGROUND_GRADIENT_CENTER = "#000000";
    const CIRCLE_BACKGROUND_GRADIENT_EDGE = "#000000";

    const ALPHA_THRESHOLD = 100;

    const BLUR = 20;

    const resizeCanvas = () => {
      circleCanvas.width =
        gradientCanvas.width =
        backgroundCanvas.width =
          window.innerWidth;
      circleCanvas.height =
        gradientCanvas.height =
        backgroundCanvas.height =
          window.innerHeight;
    };

    const Circle = function () {
      const radius = Math.floor(Math.random() * SIZEVARIATION) + MINRADIUS;

      const x = Math.random() * (window.innerWidth - radius * 2) + radius;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * VELOCITY;
      const dy = (Math.random() - 0.5) * VELOCITY;

      let baseRadius = radius;

      return {
        x,
        y,
        dx,
        dy,
        radius,

        drawCircle: function () {
          const circleGradient = circleCtx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.radius
          );
          circleGradient.addColorStop(0, CIRCLE_BACKGROUND_GRADIENT_CENTER);
          circleGradient.addColorStop(1, CIRCLE_BACKGROUND_GRADIENT_EDGE);

          circleCtx.beginPath();
          circleCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          circleCtx.fillStyle = circleGradient;
          circleCtx.fill();
        },

        drawGradient: function () {
          const offsetX = this.x - this.radius / 2;
          const offsetY = this.y - this.radius / 2;

          const gradient = gradientCtx.createRadialGradient(
            offsetX,
            offsetY,
            0,
            offsetX,
            offsetY,
            this.radius
          );
          gradient.addColorStop(0, CIRCLE_GRADIENT_CENTER);
          gradient.addColorStop(1, CIRCLE_GRADIENT_EDGE);

          gradientCtx.beginPath();
          gradientCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          gradientCtx.fillStyle = gradient;
          gradientCtx.fill();
        },

        update: function () {
          if (
            this.x + this.radius > window.innerWidth ||
            this.x - this.radius < 0
          ) {
            this.dx = -this.dx;
          }

          if (
            this.y + this.radius > window.innerHeight ||
            this.y - this.radius < 0
          ) {
            this.dy = -this.dy;
          }

          this.x += this.dx;
          this.y += this.dy;

          const xDistance = mouse.x - this.x;
          const yDistance = mouse.y - this.y;
          const distanceToCenter = Math.sqrt(
            xDistance * xDistance + yDistance * yDistance
          );

          const proximityFactor = 1 - distanceToCenter / DETECTIONDISTANCE;

          if (distanceToCenter <= DETECTIONDISTANCE) {
            this.radius = MAXRADIUS * proximityFactor + baseRadius;
          } else {
            this.radius = baseRadius;
          }

          this.drawCircle();
          this.drawGradient();
        },
      };
    };

    let circleArray = [];

    const init = () => {
      circleArray = [];
      for (let i = 0; i < CIRCLECOUNT; i++) {
        circleArray.push(new Circle());
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      circleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      gradientCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }

      blurCanvas.width = circleCanvas.width; // Set size of offscreen canvas
      blurCanvas.height = circleCanvas.height;

      blurCtx.clearRect(0, 0, blurCanvas.width, blurCanvas.height);
      blurCtx.filter = `blur(${BLUR}px)`; // Apply blur filter to offscreen canvas
      blurCtx.drawImage(circleCanvas, 0, 0); // Draw blurred circle canvas onto offscreen canvas
      blurCtx.filter = "none"; // Reset filter

      circleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clear main canvas
      circleCtx.drawImage(blurCanvas, 0, 0); // Draw blurred canvas onto main canvas

      applyAlphaThreshold(); // Apply alpha threshold to blurred canvas

      gradientCtx.drawImage(circleCanvas, 0, 0); // Draw gradient canvas on top

      backgroundCtx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clear background canvas
      backgroundCtx.fillStyle = BACKGROUNDCOLOR;
      backgroundCtx.fillRect(0, 0, window.innerWidth, window.innerHeight); // Draw background
    };

    const applyAlphaThreshold = () => {
      const imageData = blurCtx.getImageData(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      // Loop through each pixel and adjust alpha value
      for (let i = 3; i < imageData.data.length; i += 4) {
        // Check alpha channel against threshold
        if (imageData.data[i] < ALPHA_THRESHOLD) {
          // If below threshold, set alpha to 0
          imageData.data[i] = 0;
        } else {
          // If above threshold, set alpha to maximum (255)
          imageData.data[i] = 255;
        }
      }

      // Put the modified image data back to the canvas
      blurCtx.putImageData(imageData, 0, 0);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={backgroundCanvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <canvas
        ref={circleCanvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <canvas
        ref={gradientCanvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <canvas ref={blurCanvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default InteractiveCircles;
