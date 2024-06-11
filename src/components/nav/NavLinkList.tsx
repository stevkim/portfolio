import NavLink from "./NavLink";
import { NavLinks } from "@/assets/siteData";
import ResumeBtn from "../ResumeBtn";

const NavLinkList = () => {
  return (
    <div className="ml-auto hidden flex-row gap-6 md:flex">
      {NavLinks.map((nav) => {
        return <NavLink key={nav.link} input={nav} />;
      })}
      <ResumeBtn />
    </div>
  );
};

export default NavLinkList;
