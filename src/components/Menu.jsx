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
      className={`flex flex-col whitespace-nowrap ${
        menuVisible ? "" : "hidden"
      } ${
        !isFadedAbout || isUnfadedWebD || isUnfadedIndD || !isFadedProjectPage
          ? "menu--faded"
          : "menu"
      } justify-center menu px-5  md:px-16 text-xl md:w-[40vw] md:h-screen sm:text-base text-left`}
    >
      <ul className="flex flex-col gap-y-[5%] justify-between mt-[5%] ">
        <li
          className={`rounded-none playfair-italic mx-[7%] mb-[3%]  pr-2 pb-[7%] pt-[10%] font-bold  bg-opacity-75 border-secondary border-t-4 
           text-secondary text-5xl md:text-[5vw] 
           ${
             !isFadedAbout ||
             isUnfadedWebD ||
             isUnfadedIndD ||
             !isFadedProjectPage
               ? "menu--item--faded--1"
               : "menu"
           }   `}
        >
          Marcus Rydén{" "}
        </li>
        <span
          className={` mx-[7%] px-2 pb-[5%] mb-[5%]  bg-opacity-75 border-secondary border-b-4
           text-secondary md:text-[2vw]  
           ${
             !isFadedAbout ||
             isUnfadedWebD ||
             isUnfadedIndD ||
             !isFadedProjectPage
               ? "menu--item--faded--1"
               : "menu"
           }  `}
        >
          // PORTFOLIO{" "}
        </span>
        <li
          className={`
           ${
             !isFadedAbout ||
             isUnfadedWebD ||
             isUnfadedIndD ||
             !isFadedProjectPage
               ? "menu--item--faded--3"
               : "menu"
           }`}
          onClick={onClickWebD}
        >
          <div
            className=" mx-[7%] pr-2 py-[5%] font-bold  bg-opacity-75 border-opacity-25 border-slate-800
           text-secondary md:text-menu hover-effect-menu"
          >
            WEBDESIGN
          </div>
        </li>
        <li
          className={`
          ${
            !isFadedAbout ||
            isUnfadedWebD ||
            isUnfadedIndD ||
            !isFadedProjectPage
              ? "menu--item--faded--4"
              : "menu"
          }`}
          onClick={onClickIndD}
        >
          <div
            className="mx-[7%] pr-2 py-[5%] font-bold bg-opacity-75 border-opacity-25 border-slate-800 
          text-secondary md:text-menu whitespace-nowrap hover-effect-menu"
          >
            INDUSTRIAL DESIGN
          </div>
        </li>{" "}
        <li
          className={`
           ${
             !isFadedAbout ||
             isUnfadedWebD ||
             isUnfadedIndD ||
             !isFadedProjectPage
               ? "menu--item--faded--5"
               : "menu"
           }`}
          onClick={onClickAbout}
        >
          <div
            className="mx-[7%] pr-2 py-[5%] font-bold bg-opacity-75 border-opacity-25 border-slate-800 
           text-secondary md:text-menu  hover-effect-menu"
          >
            CV / ABOUT
          </div>
        </li>
      </ul>
    </div>
  );
}
