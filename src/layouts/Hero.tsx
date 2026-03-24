import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section id="main" className="flex flex-col min-h-screen pt-24 pb-12 justify-center items-center overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center justify-center text-center gap-8 px-6 sm:px-12 z-10 w-full max-w-4xl"
      >
        <motion.div 
          variants={itemVariants} 
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-xl"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm sm:text-base font-medium text-slate-300">Available for new projects</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight"
        >
          Hi, there! I am<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 drop-shadow-lg">
            Isaac Wu
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-medium h-16 sm:h-20 mt-4">
          <TypeAnimation
            sequence={[
              "A Passionate Web Developer", 2000,
              "Building Modern Experiences", 2000,
              "Crafting Engaging UI/UX", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mt-6 w-full sm:w-auto">
          <a href="#showcases" className="px-10 py-4 rounded-xl mx-auto sm:mx-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 w-full sm:w-auto">
            View Work
          </a>
          <a href="#contact" className="px-10 py-4 rounded-xl mx-auto sm:mx-0 w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold border border-slate-700 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
