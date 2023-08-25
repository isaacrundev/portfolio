import { motion } from "framer-motion";
import { me } from "../assets/index.ts";

const About = () => {
  return (
    <section id="about" className="flex ">
      <div className="flex flex-col items-center px-8 md:px-20">
        <div className="flex flex-col ">
          <p className="py-8 text-3xl font-semibold">About</p>
        </div>
        <div className="flex flex-col items-center md:pt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row sm:gap-16 lg:leading-relaxed"
          >
            <img
              className="object-contain w-5/6 rounded-md sm:w-1/4"
              src={me}
              alt="me"
            />
            <div className="py-10">
              <p>
                Hello, I'm Isaac Wu, a passionate web developer and former
                project manager.
              </p>
              <br />
              <p>
                Sometimes I wonder it would be perfect if I could know more
                about programming and software development when I was a project
                manager.
              </p>
              <br />
              <p>
                After a couple years, I decided to study web-development at
                Cornerstone International Community College of Canada.
              </p>
              <br />
              <p>
                Now, web development to me is not only a way for understanding
                how it works, but a way for building up something interesting,
                handy, and looking cool.
              </p>
            </div>
            {/* <p>
              I recently completed my studies in web development at Cornerstone
              International Community College of Canada. With a solid foundation
              in both project management and web development, I bring a unique
              perspective to my work.
            </p>
            <br /> */}
            {/* <p>
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
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
