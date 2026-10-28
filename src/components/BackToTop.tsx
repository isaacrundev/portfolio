import { ArrowUpFromLine } from "lucide-react";
import { useTranslation } from "../i18n.tsx";

const BackToTop = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t("nav.backToTop")}
      title={t("nav.backToTop")}
      className="group fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full border border-foam/15 bg-deep/60 px-3.5 py-2.5 font-mono text-[9px] uppercase tracking-[0.22em] text-foam/60 backdrop-blur-md transition-colors hover:border-reef/40 hover:text-reef sm:bottom-8 sm:right-8 sm:px-4"
    >
      <ArrowUpFromLine
        size={14}
        strokeWidth={1.75}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <span className="hidden sm:inline">{t("nav.backToTop")}</span>
    </button>
  );
};

export default BackToTop;
