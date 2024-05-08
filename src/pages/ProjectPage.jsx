export default function ProjectPage() {
  return (
    <>
      <div className="box my-5 mx-20 p-10 text-left">
        <div className="flex justify-between w-full">
          <div
            className={`${
              !isFadedProjectPage ? "gallery-title" : "gallery-title--faded"
            } gallery-element w-40 font-medium hover:scale-110 ease-in-out duration-1000`}
          >
            About
          </div>
          <div
            className={`gallery-x ${
              !isFadedProjectPage ? "gallery-x" : "gallery-x--faded"
            } ${
              !isFadedProjectPage ? "hover-scale" : ""
            } gallery-element w-10 font-bold `}
            onClick={handleClickX}
          >
            X
          </div>
        </div>

        <div
          className={`h-[400px] w-[700px]  ${
            isFadedAbout ? "about-container--faded" : "about-container"
          } `}
        >
          <div className="bg-gray-200"></div>
        </div>
      </div>
    </>
  );
}
