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
    color: "group-hover:text-red-400",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/isaac-842886255/",
    icon: contactLinkedIn,
    color: "group-hover:text-blue-500",
  },
  {
    name: "GitHub",
    link: "https://github.com/isaacrundev",
    icon: contactGithub,
    color: "group-hover:text-slate-300",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative flex justify-center overflow-hidden scroll-mt-28">
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent -z-10" />

      <div className="flex flex-col items-center w-full max-w-4xl px-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Touch</span>
          </h2>
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
          className="flex flex-col w-full bg-slate-800/50 border border-slate-700 shadow-2xl backdrop-blur-md rounded-3xl p-10 md:p-16 items-center"
        >
          <p className="pb-10 text-xl font-medium text-slate-300 text-center">
            Currently open to new opportunities! Let's build something awesome together.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
            {contactMethods.map((each, idx) => (
              <motion.a
                key={each.name}
                href={each.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-slate-500 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full p-3 group-hover:bg-slate-700 transition-colors">
                  <img src={each.icon} alt={each.name} className="w-full h-full object-contain" />
                </div>
                <span className={`font-semibold text-slate-400 transition-colors ${each.color}`}>
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
