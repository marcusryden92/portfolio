import "../index.css";
import { usePageNav } from "../hooks/usePageNavigation";
import { useContextWebD } from "../context/ContextWebD";
import { useContextIndD } from "../context/ContextIndD";
import { useContextAbout } from "../context/ContextAbout";
import { useContextProjectPage } from "../context/ContextProjectPage";
import { useEffect, useCallback } from "react";

export default function Menu({}) {
  const { handleClickAbout, handleClickIndD, handleClickWebD } = usePageNav();
  const { isUnfadedWebD, setIsUnfadedWebD, setHoverIsActiveWebD } =
    useContextWebD();
  const { isUnfadedIndD, setIsUnfadedIndD, setHoverIsActiveIndD } =
    useContextIndD();
  const { isFadedAbout, setIsFadedAbout } = useContextAbout();
  const {
    isFadedProjectPage,
    setIsFadedProjectPage,
    menuVisible,
    setCurrentProjectKind,
    setExitWebD,
    setExitIndD,
  } = useContextProjectPage();

  const onClickAbout = () => {
    handleClickAbout(
      setHoverIsActiveWebD,
      setIsUnfadedWebD,
      setHoverIsActiveIndD,
      setIsUnfadedIndD,
      setIsFadedProjectPage
    );
  };

  const onClickWebD = useCallback(() => {
    setCurrentProjectKind("webD");
    handleClickWebD(
      setHoverIsActiveIndD,
      setIsUnfadedIndD,
      setIsFadedAbout,
      setIsFadedProjectPage
    );
  }, [
    setCurrentProjectKind,
    handleClickWebD,
    setHoverIsActiveIndD,
    setIsUnfadedIndD,
    setIsFadedAbout,
    setIsFadedProjectPage,
  ]);

  const onClickIndD = useCallback(() => {
    setCurrentProjectKind("indD");
    handleClickIndD(
      setHoverIsActiveWebD,
      setIsUnfadedWebD,
      setIsFadedAbout,
      setIsFadedProjectPage
    );
  }, [
    setCurrentProjectKind,
    handleClickIndD,
    setHoverIsActiveWebD,
    setIsUnfadedWebD,
    setIsFadedAbout,
    setIsFadedProjectPage,
  ]);

  useEffect(() => {
    setExitWebD(() => onClickWebD);
    setExitIndD(() => onClickIndD);
  }, [onClickWebD, onClickIndD, setExitWebD, setExitIndD]);

  return (
    <div
      className={`flex flex-col ${menuVisible ? "" : "hidden"} ${
        !isFadedAbout || isUnfadedWebD || isUnfadedIndD || !isFadedProjectPage
          ? "menu--faded"
          : "menu"
      } justify-center menu py-5 px-5 md:py-16 md:px-16 text-xl md:w-[40vw] md:h-screen sm:text-base text-left`}
    >
      <ul className="flex flex-col gap-y-[5%] justify-between md:h-[25%]">
        <li
          className="px-[7%] pr-2 py-[5%]  bg-opacity-75 rounded-[0.5vw] border-opacity-25 border-slate-800 text-black md:text-subtitle   hover:text-gray-400 duration-500"
          onClick={onClickWebD}
        >
          WEBDESIGN
        </li>
        <li
          className="px-[7%] pr-2 py-[5%]  bg-opacity-75 rounded-[0.5vw] border-opacity-25 border-slate-800 text-black md:text-subtitle whitespace-nowrap   hover:text-gray-400 duration-500"
          onClick={onClickIndD}
        >
          INDUSTRIAL DESIGN
        </li>{" "}
        <li className="px-[7%] pr-2 py-[5%] md:text-[1vw] font-bold text-gray-400">
          / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
          / / / /{" "}
        </li>
        <li
          className="px-[7%] pr-2 py-[5%]  bg-opacity-75 rounded-[0.5vw] border-opacity-25 border-slate-800  text-black md:text-subtitle  hover:text-gray-400 duration-500"
          onClick={onClickAbout}
        >
          CV/CONTACT
        </li>
      </ul>
    </div>
  );
}
