import { useTranslation } from "../i18n";

const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();
  const isChinese = lang === "zh-TW";

  return (
    <button
      onClick={() => setLang(isChinese ? "en" : "zh-TW")}
      className="ml-1 sm:ml-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 text-slate-200 text-sm sm:text-base transition-all duration-200 pointer-events-auto"
      title={isChinese ? "Switch to English" : "切換至中文"}
    >
      {isChinese ? "EN" : "中"}
    </button>
  );
};

export default LanguageSwitcher;
