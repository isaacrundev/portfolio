import { github, link } from "../assets";

type Props = {
  name: string;
  desc: string;
  libraries: string;
  screenshots: string[];
  deployedUrl: string;
  githubUrl: string;
};

const Showcase = ({
  name,
  desc,
  libraries,
  screenshots,
  deployedUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="flex flex-col w-5/6 mx-auto bg-white shadow ">
      <div className="rounded-md"></div>
      <div className="overflow-hidden rounded-t-md">
        <a href={deployedUrl} target="_blank">
          <img
            src={screenshots[0]}
            className="object-fill w-full duration-500 ease-out scale-100 aspect-video hover:scale-105"
          />
        </a>
      </div>
      <div className="flex flex-col justify-start w-full h-48 px-3 sm:h-40 rounded-b-md">
        <div className="flex flex-row gap-3 pt-4 pb-2">
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
        <div>
          <p className="text-xs text-gray-200 ">Libraries: {libraries}</p>
        </div>
        <div>
          <p className="mt-2 text-xs italic text-gray-400"> {desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
