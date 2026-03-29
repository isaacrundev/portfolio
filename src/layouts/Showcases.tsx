import Showcase from "../components/Showcase";
import "../assets/index.ts";
import { showcaseData } from "../data/data.ts";
import { motion } from "framer-motion";

const Showcases = () => {
  return (
    <section id="showcases" className="flex flex-col items-center py-24 md:py-32 relative scroll-mt-24">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="flex flex-col w-full max-w-7xl px-6 sm:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <span className="text-brand-cyan font-mono font-bold tracking-widest uppercase mb-4 text-sm">Selected Work</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white relative">
            Featured <span className="text-gradient">Projects</span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 w-full items-stretch justify-items-center">
          {showcaseData.map((item, i) => (
            <Showcase
              key={item.name}
              index={i}
              name={item.name}
              desc={item.desc}
              libraries={item.libraries}
              screenshots={item.screenshots}
              deployedUrl={item.deployedUrl}
              githubUrl={item.githubUrl}
              role={item.role}
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
