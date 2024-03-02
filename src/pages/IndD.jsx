export default function IndD({ handleClickClear }) {
  return (
    <div
      className="box bg-amber-400 m-40 p-10 text-left"
      onClick={handleClickClear}
    >
      Click to kill
    </div>
  );
}
