import { ArrowUpFromLine } from "lucide-react";

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed flex items-center justify-center text-brand-cyan transition-all duration-500 ease-in-out bg-slate-900/60 backdrop-blur-xl border border-brand-cyan/30 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-brand-cyan/10 hover:border-brand-cyan hover:scale-110 w-12 h-12 sm:w-14 sm:h-14 bottom-6 right-6 group z-50 pointer-events-auto overflow-hidden"
    >
      <div className="absolute inset-0 bg-brand-cyan/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      <ArrowUpFromLine
        className="group-hover:-translate-y-1 relative z-10 transition-transform"
        strokeWidth={2.5}
        size={22}
      />
    </button>
  );
};

export default BackToTop;
