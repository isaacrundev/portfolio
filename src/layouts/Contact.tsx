import { motion } from "framer-motion";
import {
  contactEmail,
  contactGithub,
  contactLinkedIn,
} from "../assets/index.ts";

const contactMethods = [
  {
    name: "email",
    link: "https://formsubmit.co/el/dobuye",
    icon: contactEmail,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/isaac-842886255/",
    icon: contactLinkedIn,
  },
  {
    name: "github",
    link: "https://github.com/isaacrundev",
    icon: contactGithub,
  },
  // {
  //   name: "Telegram",
  //   link: "https://t.me/isaacrundev",
  //   icon: contactTelegram,
  // },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center">
          <p className="py-8 text-3xl font-semibold">Contact</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 0.75, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="flex flex-col mt-40"
        >
          <div>
            <p className="py-5 text-2xl text-center">You can find me on:</p>
          </div>
          <div className="flex gap-4">
            {contactMethods.map((each) => (
              <div
                key={each.name}
                id={each.name}
                className="m-0 rounded-full w-14"
              >
                <a href={each.link} target="_blank">
                  <img src={each.icon} />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
