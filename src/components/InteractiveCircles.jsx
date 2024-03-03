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
    const MAXRADIUS = 3;
    const MINRADIUS = 1;
    const SIZEVARIATION = 1;

    const GROWTHRATE = 2;
    const SHRINKRATE = 2;
    const DETECTIONDISTANCE = 150;

    const CIRCLECOUNT = 2000;

    const BACKGROUNDCOLOR = "#000B15";

    const COLORUPDATERATE = 0;

    /* const colorArray = [
      "#ED6F47",
      "#EDA947",
      "#ED8C47",
      "#F56055",
      "#EDBD47",
      "#000000",
    ];*/

    /*const colorArray = [
      "hsl(20, 100%, 60%)", // #ED6F47
      "hsl(35, 100%, 60%)", // #EDA947
      "hsl(30, 100%, 60%)", // #ED8C47
      "hsl(5, 100%, 60%)",  // #F56055
      "hsl(50, 100%, 60%)", // #EDBD47
      "hsl(0, 0%, 0%)"     // #000000
    ];*/

    //Color Black and White:

    /* const colorArray = [
      [20, 0, 90], // #ED6F47
      [35, 0, 85], // #EDA947
      [30, 0, 80], // #ED8C47
      [5, 0, 75], // #F56055
      [50, 0, 70], // #EDBD47
      [0, 0, 0], // #000000
    ]; */

    const colorArray = [
      [15, 75, 60], // #ED6F47
      [28, 80, 60], // #EDA947
      [23, 75, 60], // #ED8C47
      [4, 80, 60], // #F56055
      [45, 75, 60], // #EDBD47
      [0, 0, 0], // #000000
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
          /* c.fillStyle = `hsl(${Math.floor(this.color[0])}, ${this.color[1]}%, ${
            this.color[2]
          }%)`; */
          c.fillStyle = "#FFFFFF";
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

          if (this.color[0] < 360) {
            this.color[0] += COLORUPDATERATE;
          } else {
            this.color[0] = 0;
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
