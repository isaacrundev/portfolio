import Showcase from "../components/Showcase";
import {
  cardGame1,
  cardGame2,
  cardGame3,
  whistlerApp1,
  whistlerApp2,
  whistlerApp3,
} from "../ts";

const showcaseData = [
  {
    name: "Card Game",
    desc: "Get new deck of cards every single game. 100% no cheating",
    libraries: "HTML, CSS, JavaScript, Bootstrap, jQuery, GSAP",
    screenshots: [cardGame1, cardGame2, cardGame3],
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final",
  },
  {
    name: "Whistler App",
    desc: "An anonymous system for reporting inappropriate behaviors to admins. For both reporter an admins.",
    libraries:
      "React, TypeScript, Redux(Redux-toolkit), React Router DOM, Material-UI, React Query, Axios",
    screenshots: [whistlerApp1, whistlerApp2, whistlerApp3],
    deployedUrl: "https://dev-whistler-app.vercel.app/",
    githubUrl: "https://github.com/WMAD-0522-Final-Project",
  },
];

const Showcases = () => {
  return (
    <section id="showcases" className="bg-white ">
      <div className="container ">
        <div className="py-6 text-3xl font-semibold text-black bg-white">
          Showcases
        </div>
        <div className="grid-cols-2 py-4 bg-white min-[1033px]:grid">
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
