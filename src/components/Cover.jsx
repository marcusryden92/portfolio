import "../index.css";
import { useState, useEffect } from "react";
import portrait from "../../public/images/portrait_mono.png";

export default function Cover() {
  const [isFade, setIsFade] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  function handleFade() {
    setIsFade(true);
    setTimeout(() => setIsHidden(true), 4000);
  }

  useEffect(() => {
    setTimeout(() => handleFade(), 700);
  }, []);

  return (
    <div
      className={`flex flex-col pointer-events-none cover-viewport cover-container flex-center bg-[#13192d] rounded-none text-white
    ${isFade ? "front-page--faded " : "front-page"} 
    ${isHidden ? "hidden" : ""}`}
    ></div>
  );
}
