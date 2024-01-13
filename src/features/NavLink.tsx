import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import './nav.css';

type Link = {
  name: string,
  link: string
}

interface Props {
  input: Link
}

const NavLink = ({ input }:Props) => {
  const [hover, setHover] = useState<Boolean>(false);

  return (
    <Link to={input.link}
      className='w-fit relative z-10'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='relative z-10 px-2 text-[.5rem]'>{input.name}</div>
      <div className='absolute w-full h-[15%] bottom-[5%] overflow-hidden'>
        <div className={`${hover ? 'nav-hover' : ''} nav-link w-full h-full`}></div>
      </div>
    </Link>
  )
}

export default NavLink;