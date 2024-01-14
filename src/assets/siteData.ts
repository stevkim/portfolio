

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