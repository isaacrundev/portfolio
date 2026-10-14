import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "../i18n";
import { useReducedMotion } from "../hooks/useReducedMotion.ts";

// Staggered entrance: 0.2s delay before the first item, 0.15s between them.
const STAGGER = [0.2, 0.35, 0.5, 0.65];

const Hero = () => {
  const { t, lang } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <section id="main" className="flex flex-col min-h-screen pt-28 pb-12 justify-center items-center overflow-hidden relative">
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_10s_infinite] motion-reduce:animate-none" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-brand-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_12s_infinite_4s] motion-reduce:animate-none" />
        <div className="absolute bottom-[10%] left-[40%] w-[600px] h-[600px] bg-brand-pink/10 rounded-full mix-blend-screen filter blur-[120px] animate-[blob_15s_infinite_2s] motion-reduce:animate-none" />
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-6 px-6 sm:px-12 z-10 w-full max-w-5xl">
        <div
          style={{ animationDelay: `${STAGGER[0]}s` }}
          className="enter-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
          </span>
          <span className="text-sm sm:text-base font-semibold text-slate-200 tracking-wide">
            {t('hero.available')}
          </span>
        </div>

        <h1
          style={{ animationDelay: `${STAGGER[1]}s` }}
          className="enter-up text-6xl sm:text-7xl lg:text-9xl py-2 font-black tracking-tighter leading-[1.1] text-white"
        >
          {t('hero.greeting')} <br/>
          <span className="text-gradient">
            Isaac Wu
          </span>
        </h1>

        <div
          style={{ animationDelay: `${STAGGER[2]}s` }}
          className="enter-up text-xl sm:text-2xl lg:text-3xl text-slate-400 font-mono h-16 sm:h-20 mt-6 lg:mt-8 flex items-center justify-center"
        >
          {reducedMotion ? (
            <span className="text-white/80">{t('hero.developer')}</span>
          ) : (
          <TypeAnimation
            key={lang}
            sequence={[
              t('hero.developer'), 2000,
              t('hero.problemSolver'), 2000,
              t('hero.uiuxEngineer'), 2000,
              t('hero.lifelongLearner'), 2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-white/80"
          />
          )}
        </div>

        <div
          style={{ animationDelay: `${STAGGER[3]}s` }}
          className="enter-up flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto"
        >
          <a href="#showcases" className="group relative px-10 py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold tracking-wide transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink opacity-0 group-hover:opacity-20 transition-opacity"></span>
            {t('hero.viewWork')}
          </a>
          <a href="#contact" className="px-10 py-4 rounded-2xl w-full sm:w-auto backdrop-blur-md bg-white/5 hover:bg-white/10 text-slate-100 font-bold border border-white/10 transition-all hover:scale-[1.03] active:scale-95">
            {t('hero.contactMe')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
