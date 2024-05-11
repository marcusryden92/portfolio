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
  const { setIsFadedAbout } = useContextAbout();
  const { setIsFadedProjectPage, setGoBack, goBack } = useContextProjectPage();

  function onClickAbout() {
    handleClickAbout(
      setHoverIsActiveWebD,
      setIsUnfadedWebD,
      setHoverIsActiveIndD,
      setIsUnfadedIndD,
      setIsFadedProjectPage
    );
  }

  function onClickWebD() {
    handleClickWebD(
      setHoverIsActiveIndD,
      setIsUnfadedIndD,
      setIsFadedAbout,
      setIsFadedProjectPage
    );
  }

  function onClickIndD() {
    handleClickIndD(
      setHoverIsActiveWebD,
      setIsUnfadedWebD,
      setIsFadedAbout,
      setIsFadedProjectPage
    );
  }

  function setGoBackWebD() {
    setGoBack(onClickWebD);
  }

  function hello() {
    console.log("hello");
  }

  function setGoBackIndD() {
    setGoBack(hello);
    setTimeout(() => {
      console.log(goBack);
    }, 50);
  }

  return (
    <div className=" flex flex-col justify-center menu py-5 px-5 md:py-16 md:pl-16 text-xl min-w-[20vw] md:h-screen sm:text-base text-left  ">
      <ul>
        <li
          className="pl-2 pr-2 font-medium hover:translate-x-2 text-white hover:bg-red-500 duration-500
          "
          onClick={onClickAbout}
        >
          ABOUT
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium text-white hover:translate-x-2 hover:bg-orange-400 hover:text-white duration-500"
          onClick={() => {
            setGoBackWebD();
            onClickWebD();
          }}
        >
          WEBDESIGN
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium text-white whitespace-nowrap hover:translate-x-2 hover:bg-amber-400 hover:text-white duration-500"
          onClick={() => {
            setGoBackIndD();
            onClickIndD();
          }}
        >
          INDUSTRIAL DESIGN
        </li>
      </ul>
    </div>
  );
}
