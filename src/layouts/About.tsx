import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="">
      <div className="flex flex-col px-10 lg:px-60">
        <div className="flex flex-col justify-center text-inherit bg-inherit basis-24">
          <p className="text-3xl font-semibold text-inherit bg-inherit">
            About
          </p>
        </div>
        <div className="flex flex-col justify-center basis-24">
          <div className="rounded-full ">
            <img src="" className="" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1 }}
            className="lg:leading-relaxed "
          >
            <p>
              Hello, I'm Isaac Wu, a passionate web developer and former project
              manager.
            </p>
            <br />
            <p>
              I recently completed my studies in web development at Cornerstone
              International Community College of Canada. With a solid foundation
              in both project management and web development, I bring a unique
              perspective to my work.
            </p>
            <br />
            <p>
              Having spent over three years in project management, I have honed
              my skills in focusing on workflows and functionalities, ensuring
              efficient and effective outcomes. My goal as a web developer is to
              create engaging and user-friendly websites that not only meet
              clients' needs but also leave a lasting impression. I am
              constantly expanding my knowledge and staying up-to-date with the
              latest industry trends to deliver innovative solutions. I'm
              excited to showcase my portfolio and demonstrate how my diverse
              background and expertise can add value to your projects. Let's
              collaborate and bring your ideas to life!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
