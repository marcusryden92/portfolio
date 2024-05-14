import React, { useEffect, useRef } from "react";

const InteractiveCircles = () => {
  const circleCanvasRef = useRef(null);
  const gradientCanvasRef = useRef(null);
  const backgroundCanvasRef = useRef(null);

  // Constants for filters
  const FILL_BLUR = 7;
  const FILL_CONTRAST = 10;
  const GRADIENT_BLUR = 1;

  useEffect(() => {
    const circleCanvas = circleCanvasRef.current;
    const gradientCanvas = gradientCanvasRef.current;
    const backgroundCanvas = backgroundCanvasRef.current;
    const circleCtx = circleCanvas.getContext("2d");
    const gradientCtx = gradientCanvas.getContext("2d");
    const backgroundCtx = backgroundCanvas.getContext("2d");

    let mouse = {
      x: undefined,
      y: undefined,
    };

    const VELOCITY = 2;
    const MAXRADIUS = 70;
    const MINRADIUS = 7;
    const SIZEVARIATION = 3;

    const GROWTHRATE = 2;
    const SHRINKRATE = 2;
    const DETECTIONDISTANCE = 120;

    const CIRCLECOUNT =
      window.innerWidth < 768
        ? Math.floor((window.innerWidth * window.innerHeight) / 10000)
        : 300;

    const BACKGROUNDCOLOR = "#FFFFFF";
    const CIRCLE_FILL = "#000000";
    const CIRCLE_GRADIENT_CENTER = "rgba(0,0,0,0)";
    const CIRCLE_GRADIENT_EDGE = "rgba(0,0,0,0)";

    const COLORUPDATERATE = 0;

    const colorArray = [
      [0, 0, 0], // #000000
      [0, 0, 0], // #000000
      [0, 0, 0], // #000000
      [0, 0, 0], // #000000
      [0, 0, 0], // #000000
      [0, 0, 0], // #000000
    ];

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
        color: colorArray[Math.floor(Math.random() * colorArray.length)],

        drawCircle: function () {
          circleCtx.beginPath();
          circleCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          circleCtx.fillStyle = CIRCLE_FILL;
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

          if (this.color[0] < 360) {
            this.color[0] += COLORUPDATERATE;
          } else {
            this.color[0] = 0;
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
      backgroundCtx.fillStyle = BACKGROUNDCOLOR;
      backgroundCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }

      // Apply filters to the canvas elements directly
      circleCanvas.style.filter = `blur(${FILL_BLUR}px) contrast(${FILL_CONTRAST})`;
      gradientCanvas.style.filter = `blur(${GRADIENT_BLUR}px)`;
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
    </div>
  );
};

export default InteractiveCircles;
