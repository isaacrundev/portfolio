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
        <div className="mb-1 text-lg font-medium text-primary-500">{name}</div>
        <div className="text-xs text-gray-200 ">
          Libraries:{libraries.map((library) => ` ${library}`)}
        </div>
        {/* <div className="text-xs text-gray-200 ">Migrating to Sailboat UI</div> */}
        <p className="mt-1 text-sm italic text-gray-400">{desc}</p>
        <div className="flex gap-2 mt-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-50">
            Design
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-indigo-600 rounded-full bg-indigo-50">
            Product
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-orange-600 rounded-full bg-orange-50">
            Develop
          </span>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
