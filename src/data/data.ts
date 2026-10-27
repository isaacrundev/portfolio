import {
  apneaScreenshots,
  dodScreenshots,
  intervalScreenshots,
  sushiOtokoScreenshots,
} from "../assets";

export const showcaseData = [
  {
    name: "Interval Timer",
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
    desc: "A per-plate bill calculator -- built for conveyor-belt sushi, but the custom mode takes any place that charges by the plate. The Sushiro, Kura and Sushi Express presets ship with their tier prices; in custom mode you name the tiers, set the prices and pick the colours yourself. Tap a tier each time a plate lands and the running total, service charge included once you switch it on, is there before you reach the register. Installs to the home screen and works offline.",
    libraries: "JavaScript, PWA, Service Worker, Bun, GitHub Actions",
    screenshots: sushiOtokoScreenshots,
    deployedUrl: "https://isaacrundev.github.io/sushi-otoko/",
    githubUrl: "https://github.com/isaacrundev/sushi-otoko",
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
];
