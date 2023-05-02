import { github, link } from "../ts";

type Props = {
  name: string;
  desc: string;
  libraries: string[];
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
    <div className="max-w-md mx-auto bg-white rounded-lg shadow ">
      <a href={deployedUrl} target="_blank">
        <div className="overflow-hidden ">
          <img
            src={screenshots[0]}
            className="object-fill w-full duration-500 ease-out scale-100 aspect-video hover:scale-105"
          />
        </div>
      </a>
      <div className="p-4">
        <div className="flex items-center justify-start">
          <div className="text-lg font-medium text-primary-500">{name}</div>
          <div className="flex">
            <img src={github} className="bg-white rounded-full " />
            <img
              src={link}
              className="object-contain p-1 bg-white rounded-full"
            />
          </div>
        </div>
        <div className="text-xs text-gray-200 ">
          Libraries:{libraries.map((library) => ` ${library}`)}
        </div>
        {/* <div className="text-xs text-gray-200 ">Migrating to Sailboat UI</div> */}
        <p className="mt-1 text-sm italic text-gray-400">{desc}</p>
        <div className="flex gap-2 mt-4"></div>
      </div>
    </div>
  );
};

export default Showcase;
