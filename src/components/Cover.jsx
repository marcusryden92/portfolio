import "../index.css";
import { useState } from "react";

export default function Cover() {
  const [isFade, setIsFade] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  function handleFade() {
    setIsFade(true);
    setTimeout(() => setIsHidden(true), 2000);
  }
  return (
    <div
      className={`flex flex-col cover-viewport cover-container flex-center bg-white
    ${isFade ? "fade-out" : "front-page"} 
    ${isHidden ? "hidden" : ""}`}
    >
      <div className="" onClick={handleFade}>
        <div className="josefin-sans text-8xl  font-bold text-stone-600	hover:text-slate-400 ease-in-out duration-500">
          Marcus Rydén
        </div>
        <p className="text-5xl mt-5 text-500-slate font-extralight">
          Portfolio
        </p>
        <p className="text-xs mt-5 text-500-slate font-extralight">
          CLICK TO ENTER
        </p>
      </div>
    </div>
  );
}
