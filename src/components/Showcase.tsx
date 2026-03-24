import { motion } from "framer-motion";
import { Code2, ExternalLink, UserRound, KeyRound } from "lucide-react";
import SlideCard from "./SlideCard";

type Props = {
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
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col w-full h-full max-w-lg mx-auto bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md group hover:border-slate-500 transition-colors"
    >
      <div className="relative w-full h-64 sm:h-72 shrink-0 overflow-hidden bg-slate-900 border-b border-slate-700">
        <SlideCard screenshots={screenshots} />
      </div>
      
      <div className="flex flex-col flex-grow w-full gap-5 px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-2xl font-bold tracking-wide text-slate-100">{name}</h3>
          <div className="flex gap-3">
            {githubUrl && (
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 transition-all shadow-inner text-slate-300 hover:text-white hover:scale-110 active:scale-95" href={githubUrl} target="_blank" rel="noreferrer" title="View Source">
                <Code2 size={20} strokeWidth={2.5} />
              </a>
            )}
            {deployedUrl && (
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-all shadow-lg text-white hover:scale-110 active:scale-95" href={deployedUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={20} strokeWidth={2.5} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-300 leading-relaxed text-sm flex-grow">{desc}</p>
        
        {role && (
          <div className="flex items-center gap-2 mt-2 pt-2 text-sm">
            <UserRound size={16} className="text-emerald-400" />
            <span className="font-medium text-emerald-400">Role:</span>
            <span className="text-slate-300 font-normal">{role}</span>
          </div>
        )}

        {demoUsername && demoPswd && (
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 text-xs text-slate-400 font-mono flex flex-col gap-2 mt-2 shadow-inner">
            <div className="flex items-center gap-1.5 text-slate-300 mb-1">
              <KeyRound size={14} />
              <span className="font-semibold uppercase tracking-wider text-[10px]">Demo Credentials</span>
            </div>
            <div className="flex justify-between items-center bg-slate-800/80 px-3 py-2 rounded-md">
              <span className="text-slate-400">User</span> <span className="text-blue-300 select-all font-medium">{demoUsername}</span>
            </div>
            <div className="flex justify-between items-center bg-slate-800/80 px-3 py-2 rounded-md">
              <span className="text-slate-400">Pass</span> <span className="text-blue-300 select-all font-medium">{demoPswd}</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-slate-700/50">
          {techStack.map(tech => (
            <span key={tech} className="px-3 py-1 text-xs font-semibold text-blue-200 bg-blue-900/30 border border-blue-800/50 rounded-full shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Showcase;
