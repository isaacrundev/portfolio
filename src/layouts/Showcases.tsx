import Showcase from "../components/Showcase";
import { showcaseData } from "../data/data.ts";
import { useTranslation } from "../i18n.tsx";
import { useReveal } from "../hooks/useReveal.ts";

const getDescKey = (name: string) => {
  switch(name) {
    case "MVDB": return "mvdbDesc";
    case "YouBike Live Data Tracker": return "youbikeDesc";
    case "Diet or Die": return "dodDesc";
    case "FoxBook": return "foxbookDesc";
    case "Whistler App": return "whistlerDesc";
    case "Card Game": return "cardgameDesc";
    default: return "";
  }
};

const Showcases = () => {
  const { t } = useTranslation();
  const headingRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="showcases"
      className="snap-section relative flex flex-col items-center overflow-hidden py-20 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-reef/[0.05] blur-[120px]" />
        <div className="absolute -left-48 bottom-0 h-[560px] w-[560px] rounded-full bg-shoal/[0.05] blur-[140px]" />
      </div>

      <div className="flex w-full max-w-7xl flex-col px-6 sm:px-10">
        <div ref={headingRef} className="reveal mb-12 flex flex-col gap-5 sm:mb-16">
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-reef/70">
            <span className="h-px w-10 bg-reef/40" />
            {t("showcases.subtitle")}
            <span className="tracking-[0.2em] text-foam/40">− 32 m</span>
          </div>
          <h2 className="text-balance text-4xl font-light leading-[1.05] tracking-tight text-foam sm:text-6xl md:text-7xl">
            {t("showcases.title1")}
            <span className="text-gradient font-normal">{t("showcases.title2")}</span>
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 xl:gap-8">
          {showcaseData.map((item, i) => (
            <Showcase
              key={item.name}
              index={i}
              name={item.name}
              desc={t(`showcases.${getDescKey(item.name)}`, item.desc)}
              libraries={item.libraries}
              screenshots={item.screenshots}
              deployedUrl={item.deployedUrl}
              githubUrl={item.githubUrl}
              role={item.role ? t("showcases.role") : undefined}
              demoUsername={item.demoUsername}
              demoPswd={item.demoPswd}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcases;
