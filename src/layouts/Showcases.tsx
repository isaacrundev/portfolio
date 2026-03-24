import Showcase from "../components/Showcase";
import "../assets/index.ts";
import { showcaseData } from "../data/data.ts";

const Showcases = () => {
  return (
    <section id="showcases" className="flex flex-col items-center py-24 md:py-32 relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent -z-10" />
      <div className="flex flex-col w-full max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col items-center mb-20 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 w-full items-stretch justify-items-center">
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
