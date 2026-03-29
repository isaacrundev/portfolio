import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section id="main" className="flex flex-col min-h-screen pt-28 pb-12 justify-center items-center overflow-hidden relative">
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_10s_infinite]" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-brand-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_12s_infinite_4s]" />
        <div className="absolute bottom-[10%] left-[40%] w-[600px] h-[600px] bg-brand-pink/10 rounded-full mix-blend-screen filter blur-[120px] animate-[blob_15s_infinite_2s]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center gap-6 px-6 sm:px-12 z-10 w-full max-w-5xl"
      >
        <motion.div 
          variants={itemVariants} 
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
          </span>
          <span className="text-sm sm:text-base font-semibold text-slate-200 tracking-wide">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl sm:text-7xl lg:text-9xl py-2 font-black tracking-tighter leading-[1.1] text-white"
        >
          Hi, I am <br/>
          <span className="text-gradient">
            Isaac Wu
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-mono h-16 sm:h-20 mt-6 lg:mt-8 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              "> Developer_", 2000,
              "> Problem Solver_", 2000,
              "> UI/UX Engineer_", 2000,
              "> Lifelong Learner_", 2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-white/80"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto">
          <a href="#showcases" className="group relative px-10 py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold tracking-wide transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink opacity-0 group-hover:opacity-20 transition-opacity"></span>
            View Work
          </a>
          <a href="#contact" className="px-10 py-4 rounded-2xl w-full sm:w-auto backdrop-blur-md bg-white/5 hover:bg-white/10 text-slate-100 font-bold border border-white/10 transition-all hover:scale-[1.03] active:scale-95">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
