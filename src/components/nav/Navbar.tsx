import NavLink from './NavLink';
import ToggleTheme from './ToggleTheme';
import { NavLinks } from '../../assets/siteData';
import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 px-[10%]">
      <Link to='/' className="text-2xl hover:rotate-[-10deg] transition-all font-semibold">SK</Link>
      <div className='flex flex-row gap-6 mr-6 ml-auto'>
        {
          NavLinks.map(nav => {
            return <NavLink key={nav.link} input={nav}/>
          })
        }
      </div>
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;