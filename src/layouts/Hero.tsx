import { motion } from "framer-motion";
import { heroImg } from "../assets";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="main" className="flex flex-col min-h-screen pt-36">
      {/* <div className="flex flex-col justify-center gap-5 px-10"> */}
      {/* <img className="relative w-32 left-48" src={bubbleTalk} /> */}
      <motion.span
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 2 }}
        className={`relative left-24 sm:left-56 bg-[url('./assets/Bubble-talk.svg')] w-36 aspect-square bg-no-repeat flex items-center justify-center`}
      >
        <p className="absolute text-2xl top-9 ">Aloha!</p>
      </motion.span>
      <div className="flex flex-col justify-center gap-3 px-10">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/3"
          src={heroImg}
        ></motion.img>
        <motion.ul>
          <motion.li>
            <TypeAnimation
              sequence={["Hi, there\nI'm Isaac Wu\nA web developer", 2000]}
              className="block text-xl text-center whitespace-pre-line"
            />
          </motion.li>
        </motion.ul>

        {/* <motion.p
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
        </motion.p> */}
      </div>
    </section>
  );
};

export default Hero;
