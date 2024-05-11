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
      onClick={handleFade}
      className={`flex flex-col cover-viewport cover-container flex-center bg-white
    ${isFade ? "fade-out" : "front-page"} 
    ${isHidden ? "hidden" : ""}`}
    >
      <div className="">
        <div className="josefin-sans text-8xl  font-bold text-neutral-950	hover:text-neutral-600 ease-in-out duration-500">
          Marcus Rydén
        </div>
        <p className="text-5xl mt-5 text-500-slate font-extralight">
          Portfolio
        </p>
        <p className="text-s mt-5 text-500-slate font-extralight">
          CLICK TO ENTER
        </p>
      </div>
    </div>
  );
}
