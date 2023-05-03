import { github, link } from "../ts";

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
    // <div className="container">
    //   <div className="container">
    //     <img src={imgPath}>
    //       <a href={websiteUrl} />
    //     </img>
    //   </div>
    // </div>
    <div className="flex flex-col w-2/3 mx-auto bg-white rounded-lg shadow">
      <div className="overflow-hidden ">
        <a href={deployedUrl} target="_blank">
          <img
            src={screenshots[0]}
            className="object-fill w-full duration-500 ease-out scale-100 aspect-video hover:scale-105"
          />
        </a>
      </div>
      <div className="flex flex-col w-full h-40 p-4">
        <div className="flex flex-row gap-2">
          <p className="text-lg font-medium text-primary-500">{name}</p>
          {/* <div className="flex flex-row gap-1"> */}
          {/* <span className="w-6"> */}
          <a className="w-6 " href={githubUrl} target="_blank">
            <img
              src={github}
              className="object-contain p-1 bg-white rounded-full"
            />
          </a>
          {/* </span> */}
          {/* <span className="w-6"> */}
          <a className="w-6" href={deployedUrl} target="_blank">
            <img
              src={link}
              className="object-contain p-1 bg-white rounded-full"
            />
          </a>
          {/* </span> */}
          {/* </div> */}
        </div>
        <p className="text-xs text-gray-200 ">Libraries: {libraries}</p>
        <p className="mt-1 text-sm italic text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default Showcase;
