import { motion, Variants } from "framer-motion";
import { me } from "../assets/index.ts";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden flex justify-center scroll-mt-24">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-slate-800/20 skew-y-6 -z-10" />

      <div className="w-full max-w-6xl px-8 md:px-12 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-center p-8 lg:p-12 rounded-3xl bg-slate-800/30 border border-slate-700/50 shadow-2xl backdrop-blur-md"
        >
          <motion.div variants={itemVariants} className="w-48 sm:w-64 flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-emerald-400 rounded-2xl transform rotate-6 scale-105 opacity-50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 blur-sm" />
            <img
              className="relative object-cover w-full aspect-square rounded-2xl border-4 border-slate-800 shadow-xl z-10"
              src={me}
              alt="Isaac Wu"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6 text-slate-300 text-lg leading-relaxed lg:max-w-xl">
            <p>
              Hello, I'm <strong className="text-white">Isaac Wu</strong>, a passionate web developer and former
              project manager.
            </p>
            <p>
              Sometimes I wondered—it would be perfect if I could know more
              about programming and software development when I was a project
              manager. That curiosity led me to dive deep into code.
            </p>
            <p>
              I decided to study web-development at Cornerstone International
              Community College of Canada, bridging my organizational skills with technical execution.
            </p>
            <p>
              Now, web development is not only a way to understand
              how systems work behind the scenes, but a canvas to build something <span className="text-blue-400 font-semibold italic">interesting, handy, and visually stunning.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
