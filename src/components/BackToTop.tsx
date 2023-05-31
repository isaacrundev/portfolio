import { topBtn } from "../assets";

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="fixed inline-block p-1 uppercase transition duration-150 ease-in-out bg-gray-200 rounded-full shadow-md  w-14 h-14 hover:bg-gray-300 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg bottom-5 right-5"
      id="btn-back-to-top"
      onClick={handleClick}
    >
      <img src={topBtn} className="object-contain bg-transparent w-9" />
    </button>
  );
};

export default BackToTop;
