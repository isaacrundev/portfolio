import {
  apneaScreenshots,
  cardGameScreenshots,
  dodScreenshots,
  foxBookScreenshots,
  intervalScreenshots,
  mvdbScreenshots,
  sushiOtokoScreenshots,
  whistlerAppScreenshots,
  youbikeScreenshots,
} from "../assets";

export const showcaseData = [
  {
    name: "Interval",
    desc: "A watch-only interval timer for the Amazfit Balance 2. No phone app, no account: set work, rest, rounds and sets on the watch, hit start, and it counts down with vibration cues while you train.",
    libraries: "Zepp OS 5, JavaScript, Zeus CLI, Amazfit Balance 2",
    screenshots: intervalScreenshots,
    deployedUrl: "",
    githubUrl: "https://github.com/isaacrundev/interval-timer",
  },
  {
    name: "Apnea",
    desc: "A dry static breath-hold trainer for the same watch. Runs CO₂ and O₂ tables -- the default CO₂ table is the one printed in the AIDA3 manual -- and walks you through every hold and rest interval on the dial.",
    libraries: "Zepp OS 5, JavaScript, Zeus CLI, Amazfit Balance 2",
    screenshots: apneaScreenshots,
    deployedUrl: "",
    githubUrl: "https://github.com/isaacrundev/apnea",
  },
  {
    name: "Sushi Otoko",
    desc: "A plate-counting bill calculator for conveyor-belt sushi. Pick your chain, tap a plate colour each time one comes round, and you know what the meal costs -- service charge included -- before you walk up to the register. Installs to the home screen and keeps working offline.",
    libraries: "JavaScript, PWA, Service Worker, Bun, GitHub Actions",
    screenshots: sushiOtokoScreenshots,
    deployedUrl: "https://isaacrundev.github.io/sushi-otoko/",
    githubUrl: "https://github.com/isaacrundev/sushi-otoko",
  },
  {
    name: "MVDB",
    desc: "A multilanguage pure front-end website enables users to see and look up movie info.",
    libraries:
      "Ant Design, Axios, TanStack Router, React-spring, TanStack Query, React-i18next",
    screenshots: mvdbScreenshots,
    deployedUrl: "https://spiffy-scone-79afc0.netlify.app/",
    githubUrl: "https://gitlab.com/isaac.run.dev/mvdb",
  },
  {
    name: "YouBike Live Data Tracker",
    desc: "A web-based service enables users to check live data of the bicycle-sharing system (YouBike) in Taipei city",
    libraries: "Vite, ReactJS, TailwindCSS, Shadcn/ui, React Query, Axios",
    screenshots: youbikeScreenshots,
    deployedUrl: "https://youbike-tan.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/Youbike",
  },
  {
    name: "Diet or Die",
    desc: "A website for recording diet by bringing your own data or importing from OpenFoodFacts API *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.",
    libraries:
      "NextJS, ReactJS, NextAuthJS, Prisma, PostgreSQL, TailwindCSS, Shadcn/ui, React Hook Form, Zod, BcryptJS",
    screenshots: dodScreenshots,
    deployedUrl: "https://dod-nextjs.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/dod-nextjs",
    demoUsername: "aloha@qmail.com",
    demoPswd: "111111",
  },
  {
    name: "FoxBook",
    desc: "A CRUD MERN stack website for sharing posts among registered users",
    libraries:
      "MongoDB, ExpressJS, ReactJS, NodeJS, Mongoose, TailwindCSS, Flowbite, React Hook Form, React-router-dom, Zod, BcryptJS. *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.",
    screenshots: foxBookScreenshots,
    deployedUrl: "https://nodejs-final-client.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/nodejs-final",
  },
  {
    name: "Whistler App",
    desc: "An anonymous system for reporting inappropriate behaviors to admins. For both reporters and admins",
    libraries:
      "React, TypeScript, Redux(Redux-toolkit), React Router DOM, Material-UI, React Query, Axios, React-beautiful-dnd",
    screenshots: whistlerAppScreenshots,
    deployedUrl: "https://dev-whistler-app.vercel.app/login",
    githubUrl:
      "https://github.com/WMAD-0522-Final-Project/whistleblower-app-backend",
    role: "Frontend developer",
  },
  {
    name: "Card Game",
    desc: "Get a new deck of cards every single game. 100% no cheating guaranteed",
    libraries: "HTML, CSS, JavaScript, Bootstrap, jQuery, GSAP",
    screenshots: cardGameScreenshots,
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final",
  },
];
