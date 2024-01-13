import NavLink from '../features/NavLink';
import ToggleTheme from './ToggleTheme';

const temp = [
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
]

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost text-xl">SK</a>
      </div>
      <div className='flex flex-row gap-4 mr-4'>
        {
          temp.map(nav => {
            return <NavLink key={nav.link} input={nav}/>
          })
        }
      </div>
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;