import "../index.css";

export default function Menu({
  handleClickAbout,
  handleClickWebD,
  handleClickIndD,
}) {
  return (
    <div className=" flex flex-col justify-center menu p-16 text-xl h-80 sm:h-screen sm:text-base text-left  ">
      <ul>
        <li
          className="pl-2 pr-2  font-bold hover:translate-x-2 ease-in-out duration-500 
        hover:bg-red-500 ease-in-out duration-500 hover:text-white ease-in-out duration-250"
          onClick={handleClickAbout}
        >
          ABOUT
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium hover:translate-x-2 ease-in-out duration-500 
        hover:bg-orange-400 ease-in-out duration-500 hover:text-white ease-in-out duration-250"
          onClick={handleClickWebD}
        >
          WEBDESIGN
        </li>
        <br />
        <li
          className="pl-2 pr-2 font-medium font-medium hover:translate-x-2 ease-in-out duration-500 
        hover:bg-amber-400 ease-in-out duration-500 hover:text-white ease-in-out duration-250"
          onClick={handleClickIndD}
        >
          INDUSTRIAL DESIGN
        </li>
      </ul>
    </div>
  );
}
