import { me } from "../assets/index.ts";
import { useTranslation, Trans } from "react-i18next";
import { useReveal } from "../hooks/useReveal.ts";

const About = () => {
  const { t } = useTranslation();
  const headingRef = useReveal<HTMLDivElement>();
  const profileRef = useReveal<HTMLDivElement>();
  const storyRef = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="about" className="py-20 relative overflow-hidden flex justify-center scroll-mt-24">
      <div className="w-full max-w-7xl px-8 flex flex-col items-center">
        <div
           ref={headingRef}
           className="reveal text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white inline-block relative">
            {t('about.title1')}<span className="text-gradient">{t('about.title2')}</span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Profile Image Bento Box */}
          <div ref={profileRef} className="reveal lg:col-span-5 relative group rounded-[2.5rem] p-2 glass-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />
            <img
              className="relative object-cover w-full h-[500px] rounded-[2.2rem] transition-transform duration-700 group-hover:scale-[1.02] filter group-hover:contrast-110"
              src={me}
              alt="Isaac Wu"
            />
          </div>

          {/* Text Bento Box */}
          <div ref={storyRef} className="reveal lg:col-span-7 flex flex-col justify-center p-7 lg:p-10 glass-card rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px]" />
            
            <div className="flex flex-col gap-8 text-slate-300 text-xl leading-relaxed font-light z-10 w-full">
              <p>
                <Trans i18nKey="about.intro" components={{ 1: <strong className="text-white font-bold" /> }} />
              </p>
              <p>
                {t('about.story')}
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner">
                <p className="italic text-slate-200">
                  {t('about.quote1')}
                  <span className="text-gradient font-bold not-italic">{t('about.quote2')}</span>
                  {t('about.quote3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
