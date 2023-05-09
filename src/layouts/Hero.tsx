import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1 }}
      id="main"
      className="flex flex-row items-center min-h-screen"
    >
      <div className="container flex flex-col items-center py-5">
        <p className="text-4xl font-notoSans">HI! I AM</p>
        <p className="text-5xl ">Isaac Wu</p>
        <p className="text-2xl ">A Web Developer</p>
      </div>
    </motion.section>
  );
};

export default Hero;
