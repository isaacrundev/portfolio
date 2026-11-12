import { useTranslation } from "../i18n.tsx";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 flex flex-col items-center gap-3 border-t border-foam/5 px-6 pt-8 pb-24 font-mono text-[9px] uppercase tracking-[0.26em] text-foam/40 sm:flex-row sm:justify-between sm:px-10 sm:pb-20">
      <span>© {new Date().getFullYear()} Isaac Wu</span>
      <span>{t("footer.made")}</span>
    </footer>
  );
};

export default Footer;
