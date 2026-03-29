import { motion } from "framer-motion";
import { Code2, ExternalLink, UserRound, KeyRound } from "lucide-react";
import SlideCard from "./SlideCard";

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
  const techStack = libraries.split(",").map(t => t.trim()).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col w-full h-full mx-auto glass-card rounded-[2rem] overflow-hidden group"
    >
      <div className="relative w-full h-[300px] sm:h-[350px] shrink-0 overflow-hidden bg-slate-900 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none" />
        <SlideCard screenshots={screenshots} />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-400"></div>
           <div className="w-3 h-3 rounded-full bg-amber-400"></div>
           <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow w-full px-8 py-8 relative -mt-6 z-20 bg-slate-900/90 backdrop-blur-xl rounded-t-[2rem] border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors duration-300">{name}</h3>
          <div className="flex gap-3">
            {githubUrl && (
              <a className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all text-slate-300 hover:text-white hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.05)]" href={githubUrl} target="_blank" rel="noreferrer" title="View Source">
                <Code2 size={22} strokeWidth={2} />
              </a>
            )}
            {deployedUrl && (
              <a className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-cyan/20 hover:bg-brand-cyan/40 border border-brand-cyan/30 transition-all text-brand-cyan hover:text-white hover:scale-110 active:scale-95 glow-cyan" href={deployedUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={22} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-300 leading-relaxed text-base flex-grow mb-6 font-light">{desc}</p>
        
        {role && (
          <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
            <UserRound size={18} className="text-brand-purple" />
            <span className="font-semibold text-brand-purple text-sm">Role</span>
            <span className="text-slate-200 font-medium text-sm">{role}</span>
          </div>
        )}

        {demoUsername && demoPswd && (
          <div className="bg-slate-950/50 p-4 rounded-xl border border-white/10 text-xs text-slate-400 font-mono flex flex-col gap-3 mb-6 shadow-inner">
            <div className="flex items-center gap-2 text-slate-300 mb-1">
              <KeyRound size={16} className="text-brand-pink" />
              <span className="font-bold tracking-widest text-[11px] uppercase text-brand-pink/90">Test Credentials</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 px-4 py-2.5 rounded-lg border border-white/5">
              <span className="text-slate-500 font-medium tracking-wide">User</span> <span className="text-brand-cyan select-all font-bold">{demoUsername}</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 px-4 py-2.5 rounded-lg border border-white/5">
              <span className="text-slate-500 font-medium tracking-wide">Pass</span> <span className="text-brand-cyan select-all font-bold">{demoPswd}</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-white/10">
          {techStack.map(tech => (
            <span key={tech} className="px-4 py-1.5 text-[11px] font-bold tracking-wider text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 rounded-full hover:bg-brand-cyan/20 cursor-default transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Showcase;
