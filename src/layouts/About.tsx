import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { me } from "../assets/index.ts";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden flex justify-center scroll-mt-24">
      <div className="w-full max-w-7xl px-8 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white inline-block relative">
            About <span className="text-gradient">Me</span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"></div>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full"
        >
          {/* Profile Image Bento Box */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative group rounded-[2.5rem] p-2 glass-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />
            <img
              className="relative object-cover w-full h-[500px] rounded-[2.2rem] transition-transform duration-700 group-hover:scale-[1.02] filter group-hover:contrast-110"
              src={me}
              alt="Isaac Wu"
            />
          </motion.div>

          {/* Text Bento Box */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center p-10 lg:p-14 glass-card rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px]" />
            
            <div className="flex flex-col gap-8 text-slate-300 text-xl leading-relaxed font-light z-10 w-full">
              <p>
                Hello, I'm <strong className="text-white font-bold">Isaac Wu</strong>, a passionate web developer and former project manager.
              </p>
              <p>
                Sometimes I wondered—it would be perfect if I could know more
                about programming and software development when I was a project
                manager. That curiosity led me to dive deep into code.
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner">
                <p className="italic text-slate-200">
                  "Now, web development is not only a way to understand
                  how systems work behind the scenes, but a canvas to build something <span className="text-gradient font-bold not-italic">interesting, handy, and visually stunning.</span>"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
