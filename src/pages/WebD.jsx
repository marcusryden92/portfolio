import GalleryContainer from "../components/GalleryContainer";
import { useState, useEffect } from "react";
import { customContext } from "../context/Context";

export default function WebD({ handleClickClear }) {
  const { isClickedWebD } = customContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isClickedWebD);
    console.log(isClickedWebD);
  }, [isClickedWebD]);

  return (
    <>
      <div className="box  my-5 mx-20 p-10 text-left">
        <div className="flex justify-between">
          <div
            className={`${
              isVisible ? "gallery-title" : "gallery-title--faded"
            } my-4 bg-black text-white w-32 p-1 rounded-xl text-center 
        font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            Webdesign
          </div>
          <div
            className={`${isVisible ? "gallery-x" : "gallery-x--faded"} 
            my-4 bg-black text-white w-10 p-1 rounded-xl text-center 
            font-bold hover:scale-110 ease-in-out duration-1000`}
            onClick={handleClickClear}
          >
            X
          </div>
        </div>
        <GalleryContainer isClickedWebD={isClickedWebD} />
      </div>
    </>
  );
}
