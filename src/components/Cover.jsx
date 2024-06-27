import "../index.css";
import { useState } from "react";
import portrait from "../../public/images/portrait_mono.png";

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
      className={`flex flex-col cover-viewport cover-container flex-center bg-black rounded-none text-white
    ${isFade ? "fade-out" : "front-page"} 
    ${isHidden ? "hidden" : ""}`}
    >
      <div className="flex flex-col md:flex-row h-full ">
        <div className="flex  m-[10vw] justify-center items-center">
          <div className="flex flex-col hover:text-neutral-500">
            <div className=" text-8xl josefin-sans font-bold 	 ease-in-out duration-500">
              Marcus Rydén
            </div>
            <p className="text-5xl mt-5 font-extralight ease-in-out duration-500">
              Portfolio
            </p>
            <p className="text-3xl mt-5 font-extralight ease-in-out duration-500">
              CLICK TO ENTER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
