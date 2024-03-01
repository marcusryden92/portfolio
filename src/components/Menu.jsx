import "../index.css";

export default function Menu() {
  return (
    <div className=" flex flex-col justify-center menu p-10 ml-10 text-xl h-80 sm:h-screen sm:text-base text-left  ">
      <ul>
        <li className="pl-2 pr-2 w-20 font-bold hover:translate-x-2 ease-in-out duration-500 hover:bg-red-500 ease-in-out duration-500 hover:text-white ease-in-out duration-250">
          ABOUT
        </li>
        <br />
        <li className="pl-2 pr-2 font-medium w-32 hover:translate-x-2 ease-in-out duration-500 hover:bg-red-500 ease-in-out duration-500 hover:text-white ease-in-out duration-250">
          WEBDESIGN
        </li>
        <br />
        <li className="pl-2 pr-2 font-medium font-medium hover:translate-x-2 ease-in-out duration-500 hover:bg-red-500 ease-in-out duration-500 hover:text-white ease-in-out duration-250">
          INDUSTRIAL DESIGN
        </li>
      </ul>
    </div>
  );
}
