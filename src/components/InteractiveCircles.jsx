import React, { useEffect, useRef } from "react";

const InteractiveCircles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    let mouse = {
      x: undefined,
      y: undefined,
    };

    const VELOCITY = 2;
    const MAXRADIUS = 50;
    const MINRADIUS = 2;
    const SIZEVARIATION = 3;

    const GROWTHRATE = 2;
    const SHRINKRATE = 2;
    const DETECTIONDISTANCE = 100;

    const CIRCLECOUNT = 1000;

    const BACKGROUNDCOLOR = "#999999";

    const colorArray = [
      "#ED6F47",
      "#EDA947",
      "#ED8C47",
      "#F56055",
      "#EDBD47",
      "#000000",
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
        draw: function () {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          c.fillStyle = this.color;
          c.fill();
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

          this.draw();
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
      c.fillStyle = BACKGROUNDCOLOR;
      c.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
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

  return <canvas ref={canvasRef} />;
};

export default InteractiveCircles;
