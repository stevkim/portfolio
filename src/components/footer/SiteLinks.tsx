import { NavLinks } from "../../assets/siteData";
import { Link } from "@tanstack/react-router";

const SiteLinks = () => (
  <div className="flex flex-col ml-auto text-end mt-2">
    {
      NavLinks.map(nav => {
        return <Link key={nav.name} to={nav.link}>{nav.name}</Link>
      })
    }
    <Link to="/">home</Link>
  </div>
)

export default SiteLinks;