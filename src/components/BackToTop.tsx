import { ArrowUpFromLine } from "lucide-react";
import { topBtn } from "../assets/index.ts";

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      id="btn-back-to-top"
      onClick={handleClick}
      // className="fixed inline-block p-1 uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-md w-14 h-14 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-2xl bottom-5 right-5"
      className="fixed flex items-center justify-center text-black transition duration-150 ease-in-out bg-white rounded-full shadow-md hover:font-bold w-14 h-14 bottom-5 right-5"
    >
      {/* <img src={topBtn} className="object-contain bg-transparent w-9" /> */}
      {/* <img src={topBtn} className="object-contain w-8 bg-white" /> */}
      {/* <div className="flex flex-col bg-white"> */}
      <span className="z-50 bg-inherit">
        <ArrowUpFromLine
          className="bg-transparent"
          stroke="#322f2f"
          strokeWidth={3}
        />
      </span>
      {/* </div> */}
    </button>
  );
};

export default BackToTop;
