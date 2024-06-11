import { NavLinks } from "@/assets/siteData";
import { Link } from "@tanstack/react-router";
import ResumeBtn from "../ResumeBtn";

interface Props {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const MobileNav = ({ open, setOpen }: Props) => {
  return (
    <>
      <div
        className={`absolute left-0 z-10 flex w-full flex-col gap-1 bg-base-200 p-4 transition-all md:hidden ${
          open ? "top-[100%]" : "top-[-250%]"
        }`}
      >
        {NavLinks.map((nav) => {
          return (
            <Link
              key={nav.name}
              to={nav.link}
              onClick={() => setOpen(false)}
              className="w-full indent-1 hover:text-accent"
            >
              {nav.name}
            </Link>
          );
        })}
        <ResumeBtn />
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto flex aspect-square w-[20px] flex-col justify-evenly overflow-hidden md:hidden"
      >
        <div className={`bar ${open ? "active-first" : ""}`}></div>
        <div className={`bar ${open ? "active-middle" : ""}`}></div>
        <div className={`bar ${open ? "active-last" : ""}`}></div>
      </button>
    </>
  );
};

export default MobileNav;
