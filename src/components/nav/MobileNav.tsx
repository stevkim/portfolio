import { NavLinks } from '../../assets/siteData';
import { Link } from '@tanstack/react-router';

interface Props {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const MobileNav = ({ open, setOpen }:Props) => {

  return (
    <>
      <div className={`flex flex-col gap-1 md:hidden absolute left-0 w-full transition-all bg-base-200 z-10 p-2 ${open ? 'top-[100%]' : 'top-[-200%]'}`}>
        {
          NavLinks.map((nav) => {
            return <Link key={nav.name} to={nav.link} onClick={() => setOpen(false)} className='indent-2 w-full hover:text-accent'>{nav.name}</Link>
          })
        }
      </div>
      <button onClick={() => setOpen(!open)} className="w-[20px] aspect-square flex flex-col justify-evenly overflow-hidden ml-auto md:hidden">
        <div className={`bar ${open ? 'active-first' : ''}`}></div>
        <div className={`bar ${open ? 'active-middle' : ''}`}></div>
        <div className={`bar ${open ? 'active-last' : ''}`}></div>
      </button>
    </>
  )
}

export default MobileNav;