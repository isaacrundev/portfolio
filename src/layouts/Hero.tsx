import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="main" className="flex flex-row items-center min-h-screen">
      <div className="flex flex-col gap-5">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 400 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-5xl bg-transparent font-notoSans"
        >
          Hi, there! I AM
          {/* <div className="bg-transparent text-9xl font-notoSans">
            HI! I AM
            <p className="bg-transparent text-9xl font-notoSans"></p>
            <span className="text-3xl bg-transparent"> I AM </span>
          </div> */}
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className="bg-transparent text-9xl"
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
          className="bg-transparent text-8xl"
        >
          A Web Developer
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
