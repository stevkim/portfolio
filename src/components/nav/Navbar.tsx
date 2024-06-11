import ToggleTheme from "./ToggleTheme";
import { Link } from "@tanstack/react-router";
import MobileNav from "./MobileNav";
import { useState } from "react";
import useResize from "@/hooks/useResize";
import NavLinkList from "./NavLinkList";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const resize = useResize();

  return (
    <nav className="navbar relative z-20 bg-base-300 px-[5%] shadow-md md:px-[15%]">
      <Link
        to="/"
        className="z-20 text-2xl font-semibold transition-all hover:rotate-[-10deg] hover:text-primary"
      >
        SK
      </Link>
      {resize && <NavLinkList />}
      <ToggleTheme />
      {!resize && <MobileNav open={open} setOpen={setOpen} />}
    </nav>
  );
};

export default Navbar;
