import { motion } from "framer-motion";
import { me } from "../assets";

const About = () => {
  return (
    <section id="about" className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-5 lg:px-52">
        <div className="flex flex-col text-inherit bg-inherit basis-20">
          <p className="text-3xl font-semibold text-inherit bg-inherit">
            About
          </p>
        </div>
        <div className="flex flex-col justify-center basis-24">
          {/* <div className="rounded-full ">
            <img src="" className="" />
          </div> */}
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
              className=" object-contain max-w-[80%] sm:max-w-[30%]"
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
