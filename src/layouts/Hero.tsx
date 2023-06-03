import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="main"
      className="z-0 flex flex-col justify-center min-h-screen"
    >
      <div className="flex flex-col gap-5">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-2xl bg-transparent lg:text-5xl font-notoSans"
        >
          Hi, there! I AM
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-5xl bg-transparent lg:text-9xl"
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
          className="bg-transparent lg:text-8xl"
        >
          A Web Developer
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
