import {
  contactEmail,
  contactGithub,
  contactLinkedIn,
} from "../assets/index.ts";
import { useTranslation } from "../i18n.tsx";
import { useReveal } from "../hooks/useReveal.ts";

const contactMethods = [
  {
    name: "Email",
    link: "https://formsubmit.co/el/dobuye",
    icon: contactEmail,
    color: "group-hover:text-red-400 group-hover:glow-pink",
    border: "group-hover:border-red-500/50",
    bg: "group-hover:bg-red-500/10",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/isaac-842886255/",
    icon: contactLinkedIn,
    color: "group-hover:text-blue-400 group-hover:glow-cyan",
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    name: "GitHub",
    link: "https://github.com/isaacrundev",
    icon: contactGithub,
    color: "group-hover:text-purple-400 group-hover:glow-purple",
    border: "group-hover:border-purple-500/50",
    bg: "group-hover:bg-purple-500/10",
  },
];

type ContactMethod = (typeof contactMethods)[number];

const ContactLink = ({ method, index }: { method: ContactMethod; index: number }) => {
  const ref = useReveal<HTMLAnchorElement>(index * 0.15);

  return (
    <a
      ref={ref}
      href={method.link}
      target="_blank"
      rel="noreferrer"
      className={`reveal group flex flex-col items-center justify-center gap-6 bg-slate-900/40 p-10 rounded-[2rem] border border-white/10 transition-all duration-500 backdrop-blur-md hover:-translate-y-2.5 active:scale-95 ${method.border} ${method.bg} shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-2xl`}
    >
      <div className="w-20 h-20 flex items-center justify-center bg-slate-950 rounded-2xl p-4 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-inner">
        <img src={method.icon} alt={method.name} className="w-full h-full object-contain filter drop-shadow-lg" />
      </div>
      <span className={`text-xl font-bold tracking-wide text-slate-300 transition-colors duration-500 ${method.color}`}>
        {method.name}
      </span>
    </a>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const headingRef = useReveal<HTMLDivElement>();
  const panelRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 relative flex justify-center overflow-hidden scroll-mt-28">
      {/* Background gradients */}
      <div className="absolute bottom-0 w-full h-[600px] bg-gradient-to-t from-brand-purple/10 via-brand-pink/5 to-transparent -z-10" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/20 blur-[150px] rounded-[100%] pointer-events-none -z-10" />

      <div className="flex flex-col items-center w-full max-w-5xl px-8">
        <div ref={headingRef} className="reveal text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            {t('contact.title1')}<span className="text-gradient">{t('contact.title2')}</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-slate-300 max-w-2xl mx-auto">
            {t('contact.desc')}
          </p>
        </div>

        <div
          ref={panelRef}
          className="reveal-scale flex flex-col w-full glass-card rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full z-10 relative">
            {contactMethods.map((method, index) => (
              <ContactLink key={method.name} method={method} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
