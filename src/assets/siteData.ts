import type { NavLink, Project } from './siteDataTypes';
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

export const Projects:Project[] = [
  {
    name: 'parKing',
    stack: ['react-original', 'supabase-plain', 'redux-original'],
    description: 'A SaaS application to optimize car parking and valet interactions. Developed with high-traffic metropolitan areas in mind.',
    link: 'https://github.com/pokemon-parKing/parKing-client',
    image: parKing,
    gif: parkinggif
  },
  {
    name: 'Atelier',
    stack: ['react-original', 'mongodb-plain', 'express-original'],
    description: 'An e-commerce landing page that highlights an infinite scroll feature with a backend that optimizes queries for over 5 million products.',
    link: 'https://github.com/stevkim/atelier',
    image: atelier,
    gif: ateliergif
  },
  {
    name: 'WebCountry',
    stack: ['react-original', 'redux-original', 'puppeteer-plain'],
    description: "A web-scraping application, users can track information on Backcountry.com and an internal service will keep item information up-to-date",
    link: 'https://github.com/stevkim/scraper',
    image: webCountry
  },
  {
    name: 'Moovi',
    stack: ['typescript-plain', 'react-original', 'framermotion-original'],
    description: 'A pinterest-like media application to search, browse and save movies or tv-shows for later.',
    link: 'https://github.com/stevkim/movie-project',
    image: moovi,
    gif: moovigif
  },
  {
    name: 'S & S',
    stack: ['react-original', 'reactrouter-plain', 'tailwindcss-original'],
    description: "A wedding site used as an itinerary @ my wedding on July 9, 2023 that served a guest list of 100 people.",
    link: 'https://github.com/stevkim/wedding',
    image: wedding,
    gif: weddinggif
  },
  {
    name: 'Google Calendar Clone',
    stack: ['react-original', 'typescript-plain', 'css3-plain'],
    description: 'A minimal google calendar clone, written in Typescript. Data is stored in local storage and persisted.',
    link: 'https://github.com/stevkim/calendar-clone',
    image: calendar,
  }
]