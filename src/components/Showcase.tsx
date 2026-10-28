import { Code2, ExternalLink, UserRound, KeyRound } from "lucide-react";
import SlideCard from "./SlideCard";
import { useReveal } from "../hooks/useReveal.ts";
import { useTranslation } from "../i18n.tsx";

type Props = {
  index: number;
  name: string;
  desc: string;
  libraries: string;
  screenshots: string[];
  deployedUrl: string;
  githubUrl: string;
  role?: string;
  demoUsername?: string;
  demoPswd?: string;
};

const Showcase = ({
  index,
  name,
  desc,
  libraries,
  screenshots,
  deployedUrl,
  githubUrl,
  role,
  demoUsername,
  demoPswd,
}: Props) => {
  const { t } = useTranslation();
  const techStack = libraries.split(",").map((tech) => tech.trim()).filter(Boolean);
  // Alternate columns enter slightly later, as before.
  const revealRef = useReveal<HTMLDivElement>((index % 2) * 0.2);

  return (
    <div
      ref={revealRef}
      className="reveal glass-card group flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-reef/25"
    >
      <div className="relative h-[280px] w-full shrink-0 overflow-hidden border-b border-foam/5 bg-abyss/50 sm:h-[340px]">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
        <SlideCard screenshots={screenshots} name={name} />
        <span className="absolute left-4 top-4 z-20 rounded-full border border-foam/15 bg-abyss/50 px-3 py-1 font-mono text-[9px] tracking-[0.24em] text-foam/55 backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative z-20 flex flex-grow flex-col px-6 py-7 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-2xl font-light tracking-tight text-foam transition-colors duration-300 group-hover:text-reef sm:text-3xl">
            {name}
          </h3>
          <div className="flex gap-2.5">
            {githubUrl && (
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foam/15 text-foam/60 transition-colors hover:border-reef/40 hover:bg-reef/5 hover:text-reef sm:h-11 sm:w-11"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                title={t("showcases.viewSource")}
                aria-label={`${name} — ${t("showcases.viewSource")}`}
              >
                <Code2 size={18} strokeWidth={1.75} />
              </a>
            )}
            {deployedUrl && (
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-reef/25 bg-reef/[0.07] text-reef/80 transition-colors hover:border-reef/50 hover:bg-reef/10 hover:text-reef sm:h-11 sm:w-11"
                href={deployedUrl}
                target="_blank"
                rel="noreferrer"
                title={t("showcases.visitSite")}
                aria-label={`${name} — ${t("showcases.visitSite")}`}
              >
                <ExternalLink size={18} strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>

        <p className="mb-6 flex-grow whitespace-pre-wrap text-sm font-light leading-relaxed text-foam/60 sm:text-[15px]">
          {desc.split("*").map((part, i) =>
            i === 0 ? (
              part
            ) : (
              <span key={i} className="mt-2 block text-xs text-foam/40">
                *{part}
              </span>
            ),
          )}
        </p>

        {role && (
          <div className="mb-5 flex items-center gap-2.5 border-l border-reef/30 pl-3">
            <UserRound size={14} className="text-reef/70" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-foam/40">
              {t("showcases.roleLabel")}
            </span>
            <span className="text-xs font-medium text-foam/75">{role}</span>
          </div>
        )}

        {demoUsername && demoPswd && (
          <div className="mb-6 flex flex-col gap-2.5 rounded-xl border border-foam/10 bg-abyss/40 p-4 font-mono text-[11px]">
            <div className="mb-1 flex items-center gap-2">
              <KeyRound size={14} className="text-reef/70" />
              <span className="text-[9px] uppercase tracking-[0.24em] text-foam/45">
                {t("showcases.credentials")}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-lg border border-foam/5 bg-abyss/50 px-3 py-2">
              <span className="tracking-wide text-foam/35">{t("showcases.user")}</span>
              <span className="select-all font-medium text-shoal/90">{demoUsername}</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-lg border border-foam/5 bg-abyss/50 px-3 py-2">
              <span className="tracking-wide text-foam/35">{t("showcases.pass")}</span>
              <span className="select-all font-medium text-shoal/90">{demoPswd}</span>
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 border-t border-foam/10 pt-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="cursor-default rounded-full border border-foam/12 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foam/55 transition-colors hover:border-reef/35 hover:text-reef/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
