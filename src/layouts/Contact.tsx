import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "../i18n.tsx";
import { useReveal } from "../hooks/useReveal.ts";

const contactMethods = [
  {
    name: "Email",
    link: "https://formsubmit.co/el/dobuye",
    Icon: Mail,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/isaac-842886255/",
    Icon: Linkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/isaacrundev",
    Icon: Github,
  },
];

type ContactMethod = (typeof contactMethods)[number];

const ContactLink = ({ method, index }: { method: ContactMethod; index: number }) => {
  const ref = useReveal<HTMLAnchorElement>(index * 0.15);
  const { Icon } = method;

  return (
    <a
      ref={ref}
      href={method.link}
      target="_blank"
      rel="noreferrer"
      className="reveal group relative flex flex-col gap-8 overflow-hidden rounded-[1.75rem] border border-foam/10 bg-foam/[0.03] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-reef/30 hover:bg-foam/[0.06] sm:p-9"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-foam/10 bg-abyss/30 text-foam/65 transition-colors duration-500 group-hover:border-reef/30 group-hover:text-reef">
        <Icon size={22} strokeWidth={1.5} />
      </span>
      <span className="flex items-center justify-between gap-3">
        <span className="text-lg font-light tracking-wide text-foam/85">{method.name}</span>
        <ArrowUpRight
          size={16}
          className="text-foam/25 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-reef"
        />
      </span>
    </a>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const headingRef = useReveal<HTMLDivElement>();
  const panelRef = useReveal<HTMLDivElement>();

  return (
    <section data-section="contact" className="snap-section relative flex justify-center overflow-hidden py-20 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="plankton absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-[70vh] bg-[radial-gradient(55%_100%_at_50%_100%,rgba(94,234,212,0.12),transparent_72%)]" />
      </div>

      <div className="flex w-full max-w-5xl flex-col items-center px-6 sm:px-10">
        <div ref={headingRef} id="contact" data-nav-heading className="reveal mb-12 flex flex-col items-center gap-5 text-center sm:mb-16">
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-reef/70">
            <span className="h-px w-10 bg-reef/40" />
            {t("contact.eyebrow")}
            <span className="tracking-[0.2em] text-foam/40">− 48 m</span>
          </div>
          <h2 className="text-balance text-4xl font-light leading-[1.05] tracking-tight text-foam sm:text-5xl">
            {t("contact.title1")}
            <span className="text-gradient font-normal">{t("contact.title2")}</span>
          </h2>
          <p className="max-w-xl text-base font-light leading-relaxed text-foam/60 sm:text-lg">
            {t("contact.desc")}
          </p>
        </div>

        <div
          ref={panelRef}
          className="reveal-scale w-full rounded-[2rem] border border-foam/10 bg-abyss/20 p-3 sm:rounded-[2.5rem] sm:p-5"
        >
          <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
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
