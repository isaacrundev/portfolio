import Showcase from "../components/Showcase";
import {
  cardGame1,
  cardGame2,
  cardGame3,
  whistlerApp1,
  whistlerApp2,
  whistlerApp3,
  foxBook1,
  foxBook2,
  foxBook3,
} from "../assets";

const showcaseData = [
  {
    name: "FoxBook",
    desc: "A MERN stack website for sharing posts among registered users with CRUD.",
    libraries:
      "MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind, Flowbite, React Hook Form, React-router-dom, Zod, BcryptJS, Cors, Dotenv,Express, Express-async-errors, Jsonwebtoken, Mongoose, Nodemon",
    screenshots: [foxBook1, foxBook2, foxBook3],
    deployedUrl: "https://nodejs-final-client.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/nodejs-final",
  },
  {
    name: "Whistler App",
    desc: "An anonymous system for reporting inappropriate behaviors to admins. For both reporter an admins.",
    libraries:
      "React, TypeScript, Redux(Redux-toolkit), React Router DOM, Material-UI, React Query, Axios",
    screenshots: [whistlerApp1, whistlerApp2, whistlerApp3],
    deployedUrl: "https://dev-whistler-app.vercel.app/login",
    githubUrl: "https://github.com/WMAD-0522-Final-Project",
  },
  {
    name: "Card Game",
    desc: "Get a new deck of cards every single game. 100% no cheating guaranteed.",
    libraries: "HTML, CSS, JavaScript, Bootstrap, jQuery, GSAP",
    screenshots: [cardGame1, cardGame2, cardGame3],
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final",
  },
];

const Showcases = () => {
  return (
    <section id="showcases" className="bg-white">
      <div className="flex flex-col bg-white">
        <div className="flex flex-col justify-center bg-white basis-24">
          <p className="text-3xl font-semibold text-black bg-white ">
            Showcases
          </p>
        </div>
        <div className="flex flex-col gap-20 py-16 bg-white lg:grid lg:grid-cols-2">
          {showcaseData.map((item) => (
            <Showcase
              key={item.name}
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
