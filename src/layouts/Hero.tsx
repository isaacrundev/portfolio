import { ArrowDown, ArrowUpRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "../i18n";
import { useReducedMotion } from "../hooks/useReducedMotion.ts";

// Staggered entrance: the greeting leads, then 0.07s steps. Kept deliberately
// tight -- the heading is the LCP element, so delay plus the 0.45s in index.css
// is what LCP costs.
const STAGGER = [0.12, 0.19, 0.26];

const Hero = () => {
  const { t, lang } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="main"
      className="snap-section relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 sm:px-10"
    >
      {/* Above the water: a clear sky, a low sun and a flat horizon. Scrolling
          takes the reader below it -- the rest of the page is the water column. */}
      <div aria-hidden="true" className="hero-surface pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-sun" />
        <div className="hero-horizon" />
        <div className="hero-glitter" />
        <div className="hero-ripples" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <p
          style={{ animationDelay: `${STAGGER[0] * 0.7}s` }}
          className="enter-up font-mono text-[11px] uppercase tracking-[0.4em] text-foam/60"
        >
          {t("hero.greeting")}
        </p>

        <h1
          style={{ animationDelay: `${STAGGER[0]}s` }}
          className="enter-up mt-4 text-balance text-[clamp(3.3rem,11vw,8.5rem)] font-light leading-[0.95] tracking-[-0.04em] text-foam"
        >
          Isaac <span className="text-gradient font-normal">Wu</span>
        </h1>

        <div
          style={{ animationDelay: `${STAGGER[1]}s` }}
          className="enter-up mt-8 flex h-12 items-center font-mono text-sm text-shoal/80 sm:h-14 sm:text-base"
        >
          {reducedMotion ? (
            <span>{t("hero.developer")}</span>
          ) : (
            <TypeAnimation
              key={lang}
              sequence={[
                t("hero.developer"), 2000,
                t("hero.projectProductManager"), 2000,
                t("hero.freediver"), 2000,
                t("hero.problemSolver"), 2000,
                t("hero.scubaDiver"), 2000,
                t("hero.lifelongLearner"), 2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          )}
        </div>

        <div
          style={{ animationDelay: `${STAGGER[2]}s` }}
          className="enter-up mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <a
            href="#showcases"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-foam px-8 py-3.5 text-sm font-semibold tracking-wide text-abyss transition-colors hover:bg-reef sm:w-auto"
          >
            {t("hero.viewWork")}
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-foam/20 px-8 py-3.5 text-sm font-semibold tracking-wide text-foam/85 transition-colors hover:border-reef/40 hover:bg-foam/5 hover:text-foam sm:w-auto"
          >
            {t("hero.contactMe")}
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block">
        <div
          style={{ animationDelay: "0.55s" }}
          className="enter-up flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foam/35">
            {t("hero.scroll")}
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-reef/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
