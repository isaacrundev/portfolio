import { motion } from "framer-motion";
import {
  contactEmail,
  contactGithub,
  contactLinkedIn,
} from "../assets/index.ts";

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

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative flex justify-center overflow-hidden scroll-mt-28">
      {/* Background gradients */}
      <div className="absolute bottom-0 w-full h-[600px] bg-gradient-to-t from-brand-purple/10 via-brand-pink/5 to-transparent -z-10" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/20 blur-[150px] rounded-[100%] pointer-events-none -z-10" />

      <div className="flex flex-col items-center w-full max-w-5xl px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-slate-300 max-w-2xl mx-auto">
            Currently open to new opportunities! Let's build something awesome together.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col w-full glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full z-10 relative">
            {contactMethods.map((each, idx) => (
              <motion.a
                key={each.name}
                href={each.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className={`group flex flex-col items-center justify-center gap-6 bg-slate-900/40 p-10 rounded-[2rem] border border-white/10 transition-all duration-500 backdrop-blur-md ${each.border} ${each.bg} shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-2xl`}
              >
                <div className="w-20 h-20 flex items-center justify-center bg-slate-950 rounded-2xl p-4 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <img src={each.icon} alt={each.name} className="w-full h-full object-contain filter drop-shadow-lg" />
                </div>
                <span className={`text-xl font-bold tracking-wide text-slate-300 transition-colors duration-500 ${each.color}`}>
                  {each.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
