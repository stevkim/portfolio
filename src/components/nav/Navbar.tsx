import ToggleTheme from './ToggleTheme';
import { Link } from '@tanstack/react-router';
import MobileNav from './MobileNav';
import { useState } from "react";
import useResize from '../../hooks/useResize';
import NavLinkList from './NavLinkList';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const resize = useResize();

  return (
    <nav className="navbar bg-base-200 px-[5%] md:px-[10%] relative z-20">
      <Link to='/' className="text-2xl hover:rotate-[-10deg] transition-all font-semibold">SK</Link>
      {resize && <NavLinkList />}
      <ToggleTheme />
      {!resize && <MobileNav open={open} setOpen={setOpen}/>}
    </nav>
  );
}

export default Navbar;