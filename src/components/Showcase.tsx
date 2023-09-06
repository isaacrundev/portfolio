import { motion } from "framer-motion";
import { github, link } from "../assets/index.ts";
import SlideCard from "./SlideCard";

type Props = {
  name: string;
  desc: string;
  libraries: string;
  screenshots: string[];
  deployedUrl: string;
  githubUrl: string;
  role?: string;
  demoUsername?: string;
  demoPswd?: string;
};

const Showcase = ({
  name,
  desc,
  libraries,
  screenshots,
  deployedUrl,
  githubUrl,
  role,
  demoUsername,
  demoPswd,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-5/6 max-w-3xl bg-white "
    >
      <div className="relative w-full h-72 rounded-t-xl">
        <SlideCard screenshots={screenshots} />
      </div>
      <div className="relative flex flex-col w-full gap-3 px-5 min-h-fit rounded-b-xl">
        <div className="flex items-center justify-center gap-3 pt-3">
          <p className="text-lg font-medium text-primary-500">{name}</p>
          <a className="w-6 " href={githubUrl} target="_blank">
            <img
              src={github}
              className="object-contain p-1 bg-white rounded-full"
            />
          </a>
          <a className="w-6" href={deployedUrl} target="_blank">
            <img
              src={link}
              className="object-contain p-1 bg-white rounded-full"
            />
          </a>
        </div>
        {role && (
          <div>
            <p className="text-sm text-gray-200 ">
              My role in the team: {role}
            </p>
          </div>
        )}
        {demoUsername && demoPswd && (
          <div>
            <p className="text-xs italic text-gray-400">
              Demo login credentials:
            </p>
            <p className="text-xs italic text-gray-400">
              Username- {demoUsername}
            </p>
            <p className="text-xs italic text-gray-400">Password- {demoPswd}</p>
          </div>
        )}
        <div>
          <p className="text-xs text-gray-200 ">Libraries used: {libraries}</p>
        </div>
        <div className="pb-5">
          <p className="text-xs italic font-bold text-gray-400 ">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Showcase;
