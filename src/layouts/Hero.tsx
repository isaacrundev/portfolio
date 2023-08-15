import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="main" className="flex flex-col min-h-screen pt-60">
      <div className="flex flex-col justify-center gap-5 px-10">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-2xl lg:text-5xl font-notoSans"
        >
          Hi, there! I AM
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 250 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-9xl"
        >
          Isaac Wu
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-8xl"
        >
          A Web Developer
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
