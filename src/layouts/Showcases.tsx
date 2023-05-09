import Showcase from "../components/Showcase";
import {
  cardGame1,
  cardGame2,
  cardGame3,
  whistlerApp1,
  whistlerApp2,
  whistlerApp3,
} from "../assets";

const showcaseData = [
  {
    name: "Whistler App",
    desc: "An anonymous system for reporting inappropriate behaviors to admins. For both reporter an admins.",
    libraries:
      "React, TypeScript, Redux(Redux-toolkit), React Router DOM, Material-UI, React Query, Axios",
    screenshots: [whistlerApp1, whistlerApp2, whistlerApp3],
    deployedUrl: "https://dev-whistler-app.vercel.app/",
    githubUrl: "https://github.com/WMAD-0522-Final-Project",
  },
  {
    name: "Card Game",
    desc: "Get new deck of cards every single game. 100% no cheating.",
    libraries: "HTML, CSS, JavaScript, Bootstrap, jQuery, GSAP",
    screenshots: [cardGame1, cardGame2, cardGame3],
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final",
  },
];

const Showcases = () => {
  return (
    <section id="showcases" className="">
      <div className="flex flex-col text-inherit bg-inherit">
        <div className="flex flex-col justify-center text-inherit bg-inherit basis-24">
          <p className="text-3xl font-semibold text-inherit bg-inherit">
            Showcases
          </p>
        </div>
        {/* <div className="grid-cols-2 py-20 bg-white min-[1033px]:grid"> */}
        <div className="flex flex-col gap-20 py-16 bg-white lg:grid lg:grid-cols-2">
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
