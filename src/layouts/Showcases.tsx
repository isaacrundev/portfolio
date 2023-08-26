import Showcase from "../components/Showcase";
import "../assets/index.ts";
import {
  cardGame1,
  cardGame2,
  cardGame3,
  cardGameMobile1,
  cardGameMobile2,
  cardGameMobile3,
  foxBook1,
  foxBook2,
  foxBook3,
  foxBookMobile1,
  foxBookMobile2,
  foxBookMobile3,
  whistlerApp1,
  whistlerApp2,
  whistlerApp3,
  whistlerAppMobile1,
  whistlerAppMobile2,
  whistlerAppMobile3,
} from "../assets/index.ts";

const showcaseData = [
  {
    name: "FoxBook",
    desc: "A CRUD MERN stack website for sharing posts among registered users.",
    libraries:
      "MongoDB, ExpressJS, ReactJS, NodeJS, Mongoose, TailwindCSS, Flowbite, React Hook Form, React-router-dom, Zod, BcryptJS, Express",
    screenshots: [
      foxBook1,
      foxBook2,
      foxBook3,
      foxBookMobile1,
      foxBookMobile2,
      foxBookMobile3,
    ],
    deployedUrl: "https://nodejs-final-client.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/nodejs-final",
  },
  {
    name: "Whistler App",
    desc: "An anonymous system for reporting inappropriate behaviors to admins. For both reporter and admins.",
    libraries:
      "React, TypeScript, Redux(Redux-toolkit), React Router DOM, Material-UI, React Query, Axios, React-beautiful-dnd",
    screenshots: [
      whistlerApp1,
      whistlerApp2,
      whistlerApp3,
      whistlerAppMobile1,
      whistlerAppMobile2,
      whistlerAppMobile3,
    ],
    deployedUrl: "https://dev-whistler-app.vercel.app/login",
    githubUrl:
      "https://github.com/WMAD-0522-Final-Project/whistleblower-app-backend",
    role: "Frontend developer",
  },
  {
    name: "Card Game",
    desc: "Get a new deck of cards every single game. 100% no cheating guaranteed.",
    libraries: "HTML, CSS, JavaScript, Bootstrap, jQuery, GSAP",
    screenshots: [
      cardGame1,
      cardGame2,
      cardGame3,
      cardGameMobile1,
      cardGameMobile2,
      cardGameMobile3,
    ],
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final",
  },
];
const Showcases = () => {
  return (
    <section
      id="showcases"
      className="flex  justify-center min-h-[200vh] sm:h-[250vh] bg-white"
    >
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcases;
