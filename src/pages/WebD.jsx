import GalleryContainer from "../components/GalleryContainer";
import { useState, useEffect } from "react";

export default function WebD({ handleClickClear, isClickedWebD }) {
  return (
    <>
      <div
        className="box  my-5 mx-20 p-10 text-left"
        onClick={handleClickClear}
      >
        <div className="my-4">Webdesign</div>

        <GalleryContainer isClickedWebD={isClickedWebD} />
      </div>
    </>
  );
}
