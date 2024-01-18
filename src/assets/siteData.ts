import parKing from './images/parKing.avif';
import webCountry from './images/webcountry.avif';
import atelier from './images/atelier.avif';
import wedding from './images/wedding.avif';
import calendar from './images/calendar.avif';
import moovi from './images/moovi.avif';

export const CurrentStackList:string[] = [
  'Typescript',
  'React',
  'Redux',
  'TanStack',
  'Supabase'
]

export const ICONS:string[] = [
  'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
  'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
  'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
  'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
  'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
  'https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white',
  'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
  'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
];

export type NavLink = {
  name: string,
  link: string
}

export const NavLinks:NavLink[] = [
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

export type Project = {
  name: string,
  stack: string,
  description: string,
  link: string,
  image: string
}

export const Projects:Project[] = [
  {
    name: 'parKing',
    stack: 'React | Supabase | Redux',
    description: 'A SaaS application to optimize car parking and valet interactions. Developed with high-traffic metropolitan areas in mind.',
    link: 'https://github.com/pokemon-parKing/parKing-client',
    image: parKing
  },
  {
    name: 'Atelier',
    stack: 'React | MongoDB | Express',
    description: 'An e-commerce landing page that highlights an infinite scroll feature with a backend that optimizes queries for over 5 million products.',
    link: 'https://github.com/stevkim/atelier',
    image: atelier
  },
  {
    name: 'WebCountry',
    stack: 'React | Redux | Puppeteer',
    description: "A web-scraping application, users can track information on Backcountry.com and an internal service will keep item information up-to-date",
    link: 'https://github.com/stevkim/scraper',
    image: webCountry
  },
  {
    name: 'Moovi',
    stack: 'Typescript | React | JWT',
    description: 'A pinterest-like media application to search, browse and save movies or tv-shows for later.',
    link: 'https://github.com/stevkim/movie-project',
    image: moovi
  },
  {
    name: 'S & S',
    stack: 'React | React-Router | Tailwind CSS',
    description: "A wedding site used as an itinerary @ my wedding on July 9, 2023 that served a guest list of 100 people.",
    link: 'https://github.com/stevkim/wedding',
    image: wedding
  },
  {
    name: 'Google Calendar Clone',
    stack: 'React | Typescript | CSS',
    description: 'A minimal google calendar clone, written in Typescript. Data is stored in local storage and persisted.',
    link: 'https://github.com/stevkim/calendar-clone',
    image: calendar
  }
]