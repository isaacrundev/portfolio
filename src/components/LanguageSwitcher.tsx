import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    // Determine the current language base (e.g., 'en-US' becomes 'en')
    const currentLang = i18n.language?.startsWith("zh") ? "zh-TW" : "en";
    const newLang = currentLang === "en" ? "zh-TW" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="ml-1 sm:ml-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 text-slate-200 text-sm sm:text-base transition-all duration-200 pointer-events-auto"
      title={i18n.language?.startsWith("zh") ? "Switch to English" : "切換至中文"}
    >
      {i18n.language?.startsWith("zh") ? "EN" : "中"}
    </button>
  );
};

export default LanguageSwitcher;
