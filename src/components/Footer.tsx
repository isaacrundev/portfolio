import { useTranslation } from "../i18n.tsx";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 flex flex-col items-center gap-3 border-t border-foam/5 px-6 py-8 font-mono text-[9px] uppercase tracking-[0.26em] text-foam/40 sm:flex-row sm:justify-between sm:px-10">
      <span>© {new Date().getFullYear()} Isaac Wu</span>
      <span className="text-foam/30">− 0.0 m · {t("footer.surface")}</span>
      <span>{t("footer.made")}</span>
    </footer>
  );
};

export default Footer;
