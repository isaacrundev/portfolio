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
};

const Showcase = ({
  name,
  desc,
  libraries,
  screenshots,
  deployedUrl,
  githubUrl,
  role,
}: Props) => {
  return (
    <div className="flex flex-col w-5/6 max-w-3xl bg-white ">
      {/* <div className="overflow-hidden rounded-t-xl"> */}
      <div className="relative w-full h-72 rounded-t-xl">
        {/* <a href={deployedUrl} target="_blank">
          <img
            src={screenshots[0]}
            className="object-fill w-full duration-500 ease-out scale-100 aspect-video hover:scale-105"
          /> */}
        <SlideCard screenshots={screenshots} />
        {/* </a> */}
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
        <div>
          <p className="text-xs text-gray-200 ">Libraries used: {libraries}</p>
        </div>
        <div className="pb-5">
          <p className="text-xs italic font-bold text-gray-700 ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
