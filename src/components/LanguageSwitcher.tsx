import { useTranslation } from "../i18n";

const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();
  const isChinese = lang === "zh-TW";

  return (
    <button
      onClick={() => setLang(isChinese ? "en" : "zh-TW")}
      className="ml-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-foam/15 font-mono text-[10px] text-foam/70 transition-colors hover:border-reef/40 hover:text-reef sm:ml-2 sm:h-9 sm:w-9 sm:text-xs"
      title={isChinese ? "切換至英文" : "Switch to Chinese"}
    >
      {isChinese ? "EN" : "中"}
    </button>
  );
};

export default LanguageSwitcher;
