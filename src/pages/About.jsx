import "../index.css";
import { useContextAbout } from "../context/ContextAbout";

export default function About({ handleClickClear }) {
  const { isFadedAbout } = useContextAbout();

  return (
    <div
      className={` bg-gray-transparent m-20 p-10 text-left h-[300px] w-[500px] ${
        isFadedAbout ? "about-container--faded" : "about-container"
      }`}
      onClick={handleClickClear}
    >
      About - Click to kill
    </div>
  );
}
