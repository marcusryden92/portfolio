import "../index.css";
import { usePageNav } from "../hooks/usePageNavigation";

export default function Menu({}) {
  const { handleClickAbout, handleClickIndD, handleClickWebD } = usePageNav();
  return (
    <div className=" flex flex-col justify-center menu p-16 text-xl h-80 sm:h-screen sm:text-base text-left  ">
      <ul>
        <li
          className="pl-2 pr-2 font-bold hover:translate-x-2 text-white hover:bg-red-500 duration-500
          "
          onClick={handleClickAbout}
        >
          ABOUT
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium text-white hover:translate-x-2 hover:bg-orange-400 hover:text-white duration-500"
          onClick={handleClickWebD}
        >
          WEBDESIGN
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium text-white hover:translate-x-2 hover:bg-amber-400 hover:text-white duration-500"
          onClick={handleClickIndD}
        >
          INDUSTRIAL DESIGN
        </li>
      </ul>
    </div>
  );
}
