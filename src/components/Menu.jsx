import "../index.css";

export default function Menu() {
  return (
    <div className=" flex flex-col justify-center menu p-10 ml-10 text-xl h-80 sm:h-screen sm:text-base text-left  ">
      <ul>
        <li className="font-bold hover:translate-x-2 ease-in-out duration-500">
          ABOUT
        </li>
        <br />
        <li className="font-medium hover:translate-x-2 ease-in-out duration-500">
          WEBDESIGN
        </li>
        <br />
        <li className="font-medium hover:translate-x-2 ease-in-out duration-500">
          INDUSTRIAL DESIGN
        </li>
      </ul>
    </div>
  );
}
