import "../index.css";

export default function About({ handleClickClear }) {
  return (
    <div className="box bg-red-500 m-40 p-10" onClick={handleClickClear}>
      Click to kill
    </div>
  );
}
