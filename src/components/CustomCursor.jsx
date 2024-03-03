import React, { useState, useEffect } from "react";
import Cursor from "../assets/Cursor";
import "../index.css"; // Optional: You can define styles for your cursor in a separate CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        display:
          position.y <= 10 || position.y >= innerHeight - 10 ? "none" : "block", // Hide cursor when y position is 0
      }}
    >
      <Cursor />
    </div>
  );
};

export default CustomCursor;
