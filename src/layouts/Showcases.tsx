import Showcase from "../components/Showcase";
import "../assets/index.ts";
import { showcaseData } from "../data/data.ts";

const Showcases = () => {
  return (
    <section id="showcases" className="flex justify-center bg-white">
      <div className="flex flex-col bg-white">
        <div className="flex flex-col justify-center bg-white">
          <p className="py-8 text-3xl font-semibold text-black bg-white">
            Showcases
          </p>
        </div>
        {/* <div className="flex flex-col gap-20 pb-16 bg-white lg:grid lg:grid-cols-2"> */}
        <div className="flex flex-col gap-32 pb-16 bg-white">
          {showcaseData.map((item) => (
            <Showcase
              key={item.name}
              name={item.name}
              desc={item.desc}
              libraries={item.libraries}
              screenshots={item.screenshots}
              deployedUrl={item.deployedUrl}
              githubUrl={item.githubUrl}
              role={item.role}
              demoUsername={item.demoUsername}
              demoPswd={item.demoPswd}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcases;
