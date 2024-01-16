import parKing from './images/parKing.png';
import webCountry from './images/webcountry.png';
import atelier from './images/atelier.png';
import wedding from './images/wedding.png';
import calendar from './images/calendar.png';

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
    description: 'A SaaS application to optimize car parking and valet interactions. ParKing serves high-traffic metropolitan areas, where parking logistics are often cumbersome and time consuming.',
    link: 'https://github.com/pokemon-parKing/parKing-client',
    image: parKing
  },
  {
    name: 'Atelier',
    stack: 'React | MongoDB | Express',
    description: 'Atelier is a landing page for an e-commerce site that boasts over 15 million products. The client-side highlights an infinite scroll feature while server manages a database holding over 5gbs of product data.',
    link: 'https://github.com/stevkim/atelier',
    image: atelier
  },
  {
    name: 'WebCountry',
    stack: 'React | Redux | Puppeteer',
    description: "A web-scraping application that uses the Puppeteer API. Users can track information on Backcountry.com and WebCountry's background service will keep item information up-to-date",
    link: 'https://github.com/stevkim/scraper',
    image: webCountry
  },
  {
    name: 'S & S',
    stack: 'React | React-Router | Tailwind CSS',
    description: "A wedding site used as an itinerary @ our wedding on July 9, 2023 that served a guest list of 100 people. Designed as a mobile site, then later optimized for web. Deployed using Github pages",
    link: 'https://github.com/stevkim/wedding',
    image: wedding
  },
  {
    name: 'Google Calendar Clone',
    stack: 'React | Typescript | CSS',
    description: 'A minimal google calendar clone, written in Typescript. The user may create events and select a color to coordinate the events. Data is stored in local storage and persisted.',
    link: 'https://github.com/stevkim/calendar-clone',
    image: calendar
  }
]