import type { TNavLink, TProject, TSkillList } from './siteDataTypes';
import parKing from './images/parKing.avif';
import webCountry from './images/webcountry.avif';
import atelier from './images/atelier.avif';
import wedding from './images/wedding.avif';
import calendar from './images/calendar.avif';
import moovi from './images/moovi.avif';
import moovigif from './gifs/moovi.gif';
import ateliergif from './gifs/atelier.gif'
import weddinggif from './gifs/wedding.gif'
import parkinggif from './gifs/parKing.gif'
import calendargif from './gifs/calendar.gif';
import webcountrygif from './gifs/webcountry.gif';

export const CurrentStackList:string[] = [
  'Typescript',
  'React',
  'Redux',
  'TanStack',
  'Supabase'
]

export const IconList:string[] = [
  'react-original',
  'supabase-plain',
  'redux-original',
  'mongodb-plain',
  'express-original',
  'typescript-plain',
  'javascript-plain',
  'reactrouter-plain',
  'tailwindcss-original',
  'html5-plain',
  'css3-plain',
  'amazonwebservices-plain-wordmark',
  'git-plain',
  'jest-plain',
  'mysql-original',
  'nodejs-plain-wordmark',
  'socketio-original',
]

export const NavLinks:TNavLink[] = [
  {
    name: 'portfolio',
    link: '/portfolio',
  },
  {
    name: 'about',
    link: '/about',
  },
  {
    name: 'contact',
    link: '/contact'
  }
];

export const Projects:TProject[] = [
  {
    name: 'parKing',
    stack: ['react-original', 'supabase-plain', 'redux-original'],
    description: 'A SaaS application to optimize car parking and valet interactions in high-traffic metropolitan areas. With my role as the tech lead for this project, I was able to practice project management and spearhead the integration of different features. My responsibilities included project design, scope, and backend systems.',
    link: 'https://github.com/pokemon-parKing/parKing-client',
    image: parKing,
    gif: parkinggif
  },
  {
    name: 'Atelier',
    stack: ['react-original', 'mongodb-plain', 'express-original'],
    description: 'A landing page for an e-commerce site with over 5 million products. Key features for the front-end include an infinite scroll, optimized with a custom React throttle hook. The backend boasts an average response times of 200ms with 0% error rates for queries to a database holding 15 million documents.',
    link: 'https://github.com/stevkim/atelier',
    image: atelier,
    gif: ateliergif
  },
  {
    name: 'WebCountry',
    stack: ['react-original', 'redux-original', 'puppeteer-plain'],
    description: "A web-scraping application for users to track information on Backcountry.com. Utilizing Puppeteer, I created a background service to scrape products at set times every day. Scraped information is stored in a database to track price trends.",
    link: 'https://github.com/stevkim/scraper',
    image: webCountry,
    gif: webcountrygif
  },
  {
    name: 'Moovi',
    stack: ['typescript-plain', 'react-original', 'framermotion-original'],
    description: "A pinterest-like media application to search, browse and save movies or tv-shows for later. The project uses the MovieAPI and stores user data in a database. This project's key feature is the custom authentication system, where a JWT token is stored in the user's cookies and verified on the backend. ",
    link: 'https://github.com/stevkim/movie-project',
    image: moovi,
    gif: moovigif
  },
  {
    name: 'S & S',
    stack: ['react-original', 'reactrouter-plain', 'tailwindcss-original'],
    description: "A wedding site used as an itinerary @ my wedding on July 9, 2023. The project has fluid animations using the Framer library and was developed with the mobile first design pattern. The project successfully catered to 100 guests at the wedding, receiving positive feedback.",
    link: 'https://github.com/stevkim/wedding',
    image: wedding,
    gif: weddinggif
  },
  {
    name: 'Google Calendar Clone',
    stack: ['react-original', 'typescript-plain', 'css3-plain'],
    description: 'A minimal google calendar clone, this was my first project using Typescript and exploring data persistence. Data is stored in localStorage and rendered individually by day.',
    link: 'https://github.com/stevkim/calendar-clone',
    image: calendar,
    gif: calendargif
  }
]

export const Skills:TSkillList[] = [
  {
    section: 'frontend',
    skills: ['React.js', 'Axios', 'Redux', 'React-Router', 'Tanstack ecosystem', 'Javascript ecosystem', 'Framer']
  },
  {
    section: 'backend',
    skills: ['MongoDB', 'Supabase', 'Express.js', 'Node.js', 'Nginx', 'Socket.io', 'Mongoose', 'MySQL']
  },
  {
    section: 'tools & concepts',
    skills: ['Git', 'Jest', 'React Testing Library', 'Vite', 'Agile', 'AWS (EC2)', 'Docker', 'Webpack']
  }
]