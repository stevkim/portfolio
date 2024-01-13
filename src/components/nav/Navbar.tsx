import NavLink from './NavLink';
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
    <nav className="navbar bg-base-100 px-10">
      <a href='/' className="text-2xl hover:rotate-[-10deg] transition-all font-semibold">SK</a>
      <div className='flex flex-row gap-6 mr-6 ml-auto'>
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