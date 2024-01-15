import parKing1 from './images/parKing-home.png';
import parKing2 from './images/parKing-map.png';
import parKing3 from './images/parKing-analytics.png';

import webCountry1 from './images/webCountry-home.png'
import webCountry2 from './images/webCountry-pagination.png'
import webCountry3 from './images/webCountry-chart.png'

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
  images: string[]
}

export const Projects:Project[] = [
  {
    name: 'parKing',
    stack: 'React | Supabase | Redux',
    description: 'A SaaS application to optimize car parking and valet interactions. ParKing serves high-traffic metropolitan areas, where parking logistics are often cumbersome and time consuming.',
    link: '/',
    images: [parKing1, parKing2, parKing3]
  },
  {
    name: 'Atelier',
    stack: 'React | MongoDB | Express',
    description: 'Atelier is a landing page for an e-commerce site that boasts over 15 million products.',
    link: '',
    images: []
  },
  {
    name: 'WebCountry',
    stack: 'React | Redux | Puppeteer',
    description: "A web-scraping application that uses the Puppeteer API. Users can track information on Backcountry.com and WebCountry's background service will keep item information up-to-date",
    link: 'https://github.com/stevkim/scraper',
    images: [webCountry1, webCountry2, webCountry3]
  }
]