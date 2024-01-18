import NavLink from "./NavLink";
import { NavLinks } from "../../assets/siteData";

const NavLinkList = () => {
  return (
    <div className='hidden md:flex flex-row gap-6 mr-6 ml-auto'>
      {
        NavLinks.map(nav => {
          return <NavLink key={nav.link} input={nav}/>
        })
      }
    </div>
  )
}

export default NavLinkList;