import { avifVersions, me } from "../assets/index.ts";
import { useTranslation } from "../i18n.tsx";
import { useReveal } from "../hooks/useReveal.ts";

const About = () => {
  const { t } = useTranslation();
  // about.intro wraps the name in <1>...</1>, which is the only rich text on this
  // page; both locales use it, so splitting on the tags is enough.
  const [intro, introName, introRest] = t("about.intro").split(/<\/?1>/);
  const headingRef = useReveal<HTMLDivElement>();
  const profileRef = useReveal<HTMLDivElement>();
  const storyRef = useReveal<HTMLDivElement>(0.15);

  return (
    <section
      id="about"
      className="snap-section relative flex justify-center overflow-hidden py-20 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-foam/15 to-transparent" />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-reef/[0.045] blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl px-6 sm:px-10">
        <div ref={headingRef} className="reveal mb-14 flex flex-col gap-5 sm:mb-16">
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-reef/70">
            <span className="h-px w-10 bg-reef/40" />
            {t("about.eyebrow")}
            <span className="tracking-[0.2em] text-foam/40">− 18 m</span>
          </div>
          <h2 className="max-w-3xl text-balance text-4xl font-light leading-[1.05] tracking-tight text-foam sm:text-6xl md:text-7xl">
            {t("about.title1")}
            <span className="text-gradient font-normal">{t("about.title2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div ref={profileRef} className="reveal lg:col-span-5">
            <figure className="relative overflow-hidden rounded-[2rem] border border-foam/10 bg-abyss/40 p-2">
              {/* Below the fold. React 19 emits a high-priority
                  <link rel=preload as=image> for every eager <img> it server-renders,
                  so omitting loading=lazy pulls this 106KB in ahead of the hero. */}
              <picture className="contents">
                {avifVersions[me] && <source srcSet={avifVersions[me]} type="image/avif" />}
                <img
                  className="h-[420px] w-full rounded-[1.6rem] object-cover object-top sm:h-[520px]"
                  src={me}
                  alt="Isaac Wu"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-abyss/80 via-abyss/10 to-transparent" />
              <figcaption className="absolute inset-x-6 bottom-5 z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-foam/55">
                <span>Portrait</span>
                <span>25°N · 121°E</span>
              </figcaption>
            </figure>
          </div>

          <div
            ref={storyRef}
            className="reveal flex flex-col justify-center gap-8 lg:col-span-7"
          >
            <div className="space-y-6 text-base font-light leading-relaxed text-foam/65 sm:text-lg">
              <p>
                {intro}
                <strong className="font-medium text-foam">{introName}</strong>
                {introRest}
              </p>
              <p>{t("about.story")}</p>
              <div className="rounded-2xl border border-foam/10 bg-abyss/30 p-5 sm:p-6">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-reef/70">
                  {t("about.nowLabel")}
                </span>
                <p>{t("about.now")}</p>
              </div>
            </div>

            <blockquote className="rounded-2xl border border-foam/10 bg-gradient-to-br from-foam/[0.05] to-transparent p-6 sm:p-8">
              <p className="text-lg font-light leading-snug text-foam/80 sm:text-xl">
                {t("about.quote1")}
                <span className="text-gradient font-normal">{t("about.quote2")}</span>
                {t("about.quote3")}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
