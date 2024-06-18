import type { TNavLink, TProject, TSkillList } from "./siteDataTypes";
import parKing from "./images/parKing.avif";
import webCountry from "./images/webcountry.avif";
import atelier from "./images/atelier.avif";
import wedding from "./images/wedding.avif";
import calendar from "./images/calendar.avif";
import moovi from "./images/moovi.avif";
import anon from "./images/anon.avif";
import moovigif from "./gifs/moovi.gif";
import ateliergif from "./gifs/atelier.gif";
import weddinggif from "./gifs/wedding.gif";
import parkinggif from "./gifs/parKing.gif";
import calendargif from "./gifs/calendar.gif";
import webcountrygif from "./gifs/webcountry.gif";
import anonGif from "./gifs/anon.gif";

export const CurrentStackList: string[] = [
  "Typescript",
  "React",
  "Redux",
  "TanStack",
  "Supabase",
];

export const IconList: string[] = [
  "nextjs-plain",
  "react-original",
  "supabase-plain",
  "redux-original",
  "prisma-original",
  "mongodb-plain",
  "express-original",
  "typescript-plain",
  "javascript-plain",
  "reactrouter-plain",
  "tailwindcss-original",
  "html5-plain",
  "css3-plain",
  "amazonwebservices-plain-wordmark",
  "git-plain",
  "jest-plain",
  "mysql-original",
  "nodejs-plain-wordmark",
  "socketio-original",
];

export const NavLinks: TNavLink[] = [
  {
    name: "portfolio",
    link: "/portfolio",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

export const Projects: TProject[] = [
  {
    name: "anon.",
    stack: ["nextjs-plain", "supabase-plain", "prisma-original"],
    description:
      "Anon is a platform to read, write, and share literature anonymously. Users can create accounts, publish their writing, and like and share posts. Tested end-to-end with Playwright, Anon features a rich text editor utilizing Novel.sh and Tiptap, allowing users the flexibility to write to their hearts' content.",
    link: "https://github.com/stevkim/anon",
    image: anon,
    gif: anonGif,
    deployed: "https://anon-stevkims-projects.vercel.app/",
  },
  {
    name: "parKing",
    stack: ["react-original", "supabase-plain", "redux-original"],
    description:
      "A SaaS application aimed at optimizing car parking and valet interactions in bustling metropolitan areas. As the technical lead, I took charge of project management, steering the integration of diverse features. My responsibilities encompassed project design, defining scope, and the development of backend systems.",
    link: "https://github.com/pokemon-parKing/parKing-client",
    image: parKing,
    gif: parkinggif,
  },
  {
    name: "Atelier",
    stack: ["react-original", "mongodb-plain", "express-original"],
    description:
      "A landing page for an e-commerce site with 5 million+ products, the project includes a smooth infinite scroll, optimized with a custom React throttle hook. Backend performance excels with a 200ms response time and a flawless 0% error rate for queries to a database housing 15 million documents.",
    link: "https://github.com/stevkim/atelier",
    image: atelier,
    gif: ateliergif,
  },
  {
    name: "WebCountry",
    stack: ["react-original", "redux-original", "puppeteer-plain"],
    description:
      "A web-scraping application using Puppeteer to enable users to track information on Backcountry.com. I implemented a background service to perform automated product scraping at scheduled intervals each day. The extracted data is then stored in a database, allowing users to monitor and analyze price trends over time.",
    link: "https://github.com/stevkim/scraper",
    image: webCountry,
    gif: webcountrygif,
  },
  {
    name: "Moovi",
    stack: ["typescript-plain", "react-original", "framermotion-original"],
    description:
      "A Pinterest-inspired media application allowing users to search, browse, and save movies or TV shows for later. Leveraging the MovieAPI, the project incorporates a robust database to store user data. A standout feature is a custom authentication system, securing user data with a JWT token stored in cookies and verified on the backend",
    link: "https://github.com/stevkim/movie-project",
    image: moovi,
    gif: moovigif,
  },
  {
    name: "S & S",
    stack: ["react-original", "reactrouter-plain", "tailwindcss-original"],
    description:
      "A wedding site used as an itinerary for my July 9, 2023 celebration, featuring fluid animations powered by the Framer library. Developed with a mobile-first design pattern, the project seamlessly accommodated 100 guests, garnering positive feedback for its engaging and user-friendly experience.",
    link: "https://github.com/stevkim/wedding",
    image: wedding,
    gif: weddinggif,
    deployed: "https://stevkim.github.io/wedding/",
  },
  {
    name: "Google Calendar Clone",
    stack: ["react-original", "typescript-plain", "css3-plain"],
    description:
      "A minimal Google Calendar clone, this was my first project using Typescript and exploring data persistence. The user can navigate to precise days and create and store events. The event data is then stored in localStorage with proper keys for data integrity.",
    link: "https://github.com/stevkim/calendar-clone",
    image: calendar,
    gif: calendargif,
  },
];

export const Skills: TSkillList[] = [
  {
    section: "frontend",
    skills: [
      "Next.js",
      "React.js",
      "Axios",
      "Redux",
      "Framer",
      "React-Router",
      "Tanstack ecosystem",
      "Javascript ecosystem",
      "TailwindCSS",
    ],
  },
  {
    section: "backend",
    skills: [
      "MongoDB",
      "Supabase",
      "Express.js",
      "Node.js",
      "Nginx",
      "Socket.io",
      "Mongoose",
      "MySQL",
      "Prisma",
    ],
  },
  {
    section: "tools & concepts",
    skills: [
      "Git",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Vite",
      "Agile",
      "AWS (EC2, DocDB)",
      "Docker",
      "Webpack",
      "Mocha",
    ],
  },
];
