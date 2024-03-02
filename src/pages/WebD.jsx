export default function WebD({ handleClickClear }) {
  return (
    <div className="box bg-green-500 m-40 p-10" onClick={handleClickClear}>
      Click to kill
    </div>
  );
}
