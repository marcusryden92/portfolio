import "../index.css";

export default function About({ handleClickClear }) {
  return (
    <div
      className="box bg-gray-transparent m-20 p-10 text-left"
      onClick={handleClickClear}
    >
      About - Click to kill
    </div>
  );
}
