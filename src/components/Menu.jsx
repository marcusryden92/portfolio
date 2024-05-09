import "../index.css";
import { usePageNav } from "../hooks/usePageNavigation";
import { useContextWebD } from "../context/ContextWebD";
import { useContextIndD } from "../context/ContextIndD";
import { useContextAbout } from "../context/ContextAbout";
import { useContextProjectPage } from "../context/ContextProjectPage";

export default function Menu({}) {
  const { handleClickAbout, handleClickIndD, handleClickWebD } = usePageNav();
  const { setIsUnfadedWebD, setHoverIsActiveWebD } = useContextWebD();
  const { setIsUnfadedIndD, setHoverIsActiveIndD } = useContextIndD();
  const { setIsFadedAbout, isFadedAbout } = useContextAbout();
  const { setIsFadedProjectPage, isFadedProjectPage } = useContextProjectPage();

  return (
    <div className=" flex flex-col justify-center menu py-16 pl-16 text-xl h-80 min-w-[20vw] sm:h-screen sm:text-base text-left  ">
      <ul>
        <li
          className="pl-2 pr-2 font-medium hover:translate-x-2 text-white hover:bg-red-500 duration-500
          "
          onClick={() => {
            handleClickAbout(
              setHoverIsActiveWebD,
              setIsUnfadedWebD,
              setHoverIsActiveIndD,
              setIsUnfadedIndD,
              isFadedAbout,
              setIsFadedAbout,
              isFadedProjectPage,
              setIsFadedProjectPage
            );
          }}
        >
          ABOUT
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium text-white hover:translate-x-2 hover:bg-orange-400 hover:text-white duration-500"
          onClick={() => {
            handleClickWebD(
              setHoverIsActiveIndD,
              setIsUnfadedIndD,
              setIsFadedAbout,
              setIsFadedProjectPage
            );
          }}
        >
          WEBDESIGN
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium text-white hover:translate-x-2 hover:bg-amber-400 hover:text-white duration-500"
          onClick={() => {
            handleClickIndD(
              setHoverIsActiveWebD,
              setIsUnfadedWebD,
              setIsFadedAbout,
              setIsFadedProjectPage
            );
          }}
        >
          INDUSTRIAL DESIGN
        </li>
      </ul>
    </div>
  );
}
