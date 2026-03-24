import { ArrowUpFromLine } from "lucide-react";

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      id="btn-back-to-top"
      onClick={handleClick}
      className="fixed flex items-center justify-center text-slate-100 transition-all duration-300 ease-in-out bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg hover:bg-slate-700 hover:shadow-blue-500/20 hover:border-slate-500 w-12 h-12 sm:w-14 sm:h-14 bottom-5 right-5 group z-50"
    >
      <ArrowUpFromLine
        className="group-hover:-translate-y-1 transition-transform"
        strokeWidth={2}
        size={24}
      />
    </button>
  );
};

export default BackToTop;
