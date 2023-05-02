import Showcase from "../components/Showcase";
import { cardGame1, cardGame2, cardGame3 } from "../ts";

const showcaseData = [
  {
    name: "Card Game",
    desc: "Draw a card and see which side is bigger. 100% no cheating",
    libraries: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "GSAP"],
    screenshots: [cardGame1, cardGame2, cardGame3],
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final",
  },
];

const Showcases = () => {
  return (
    <section id="showcases" className="bg-white ">
      <div className="container ">
        <div className="text-xl text-black bg-white">Showcases</div>
        <div className="grid bg-white">
          {showcaseData.map((item) => (
            <Showcase
              name={item.name}
              desc={item.desc}
              libraries={item.libraries}
              screenshots={item.screenshots}
              deployedUrl={item.deployedUrl}
              githubUrl={item.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcases;
